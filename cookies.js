const puppeteer = require("puppeteer-core");
// const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
// const { scrollPageToTop } = require("puppeteer-autoscroll-down");
const assert = require("assert");
const os = require("os");
const fs = require("fs");
const path = require("path");
const { get } = require("https");
const { error } = require("console");
const hidemyacc = new (require("./hidemyacc"))();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const goto = async (
  page,
  url,
  options = { timeout: 60000, waitUntil: "networkidle0" }
) => {
  try {
    await page.goto(url, options);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

const waitForSelector = async (page, selector, options = { timeout: 3000 }) => {
  try {
    await page.waitForSelector(selector, options);
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const hidemyaccCachePath = path.join(
  os.homedir(),
  ".hidemyacc",
  "cached-profiles"
);

const hidemyaccProfilePath = path.join(
  os.homedir(),
  ".hidemyacc",
  "profiles"
)

!(async () => {
  let i = 0;
  //for(i;i<10; i++){
    try {
      // Tạo 1 profile mới
      // const createProfile = await hidemyacc.create({
      //   name: "Test1",
      //   folder: "64b64fa2f25829e1fdd1e142",
      // });
      // console.log(createProfile.data);
      //console.log(1);
      // const profileID = createProfile.data.id; //Lấy profile ID vừa tạo
      const profileID = "6513b33bf5f03d26a04ef730";
      //console.log(profileID)
      const proxy = {
        mode: "none",
        host: "pr.lunaproxy.com",
        port: 12233,
        username: "user-lu2769084-region-us",
        password: "Abcd!22345",
      };

      //Start profile
      const startProfile = await hidemyacc.start(profileID, {
        proxy: JSON.stringify(proxy),
      });
      const browser = await puppeteer.connect({
        browserWSEndpoint: startProfile.data.wsUrl,
        defaultViewport: null,
        slowMo: 60,
      });
      assert(browser);

      const page = await browser.newPage(); //Mở 1 tab mới
      let vongLap = 0
      while(vongLap<5){
        vongLap++
        try {
          assert(await goto(page, "https://gmail.com/", { waitUntil: "load" })); //Truy cập gmail và chờ load trang
        await delay(5000);
          const cookies = await page.cookies();
          //console.log(cookies);
          const isFound = cookies.some(element => {
            if (element.name === 'GMAIL_AT') {
              return true;
            }
            return false;
          });
          console.log("Login session pass");
          break
        } catch (error){}
      }
        
      while(vongLap < 5) {
        vongLap ++
        try {
          assert(await goto(page, "https://mail.tm/", { waitUntil: "load", timeout: 10000 }));

          const localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage));
          if (JSON.stringify(localStorage).includes('hgjakndiikpfdov@diginey.com')) {
            console.log("Pass")
          } else {
            console.log("Fail")
          }
          break
        } catch (error) {
          //console.log(error)
        }
      }
      browser.close();

      await delay(5000);
      //Nối chuỗi xóa folder cache-profile
      const profileCachePath = path.join(hidemyaccCachePath, profileID);
      // console.log(profileCachePath);
      //Kiểm tra folder có tồn tại và xóa folder có file
      if (fs.existsSync(profileCachePath)) {
        fs.rmSync(profileCachePath, { recursive: true, force: true });
        console.log("Delete cache pass");
      } else {
        console.log("Folder not found");
      }

      //Nối chuỗi xóa folder profile
      const folderProifle = ("hma_" + profileID);
      //console.log(folderProifle);
      const profilePath = path.join(hidemyaccProfilePath, folderProifle);
      // console.log(profilePath);
      //Kiểm tra folder có tồn tại và xóa folder có file
      if (fs.existsSync(profilePath)) {
        fs.rmSync(profilePath, { recursive: true, force: true });
        console.log("Delete profile pass");
      } else {
        console.log("Folder not found");
      }
      console.log(1);

    } catch (error) {
      console.log(error.message);
    };
    // console.log("Done " + i)
    // console.log(" ")
  //}
})();
