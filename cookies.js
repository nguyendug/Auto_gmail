const puppeteer = require("puppeteer-core");
// const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
// const { scrollPageToTop } = require("puppeteer-autoscroll-down");
const assert = require("assert");
const os = require("os");
const fs = require("fs");
const path = require("path");
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

!(async () => {
  try {
    const proxy = {
      mode: "none",
      host: "pr.lunaproxy.com",
      port: 12233,
      username: "user-lu2769084-region-us",
      password: "Abcd!22345",
    };

    //set cookies
    try {
      // Tạo 1 profile mới
      const createProfile = await hidemyacc.create({
        name: "Test1",
        folder: "64b64fa2f25829e1fdd1e142",
      });
      console.log(createProfile.data);
      //console.log(1);
      const profileID = createProfile.data.id; //Lấy profile ID vừa tạo
      console.log(profileID);

      //Start profile
      const startProfile = await hidemyacc.start(profileID, {
        proxy: JSON.stringify(proxy),
      });

      const browser = await puppeteer.connect({
        browserWSEndpoint: startProfile.data.wsUrl,
        defaultViewport: null,
        slowMo: 60,
      });

      const page = await browser.newPage(); //Mở 1 tab mới
      const cookiesString = await fs.readFileSync("./cookies.txt"); //Đọc file cookies
      const cookies = JSON.parse(cookiesString); //Chuyển chuỗi sang dạng opject
      await page.setCookie(...cookies);
      //console.log(cookies);
      assert(await goto(page, "https://gmail.com/", { waitUntil: "load" })); //Truy cập gmail và chờ load trang

      assert(browser);
      await delay(120000);
      await browser.close();

      await delay(5000);
      //Nối chuỗi
      const profileCachePath = path.join(hidemyaccCachePath, profileID);
      console.log(profileCachePath);
      //Kiểm tra folder có tồn tại và xóa folder có file
      if (fs.existsSync(profileCachePath)) {
        fs.rmSync(profileCachePath, { recursive: true, force: true });
        console.log("Pass");
      } else {
        console.log("Delete folder fail");
      }
      //console.log(1);

      await delay(10000);
      const startProfile2 = await hidemyacc.start(profileID, {
        proxy: JSON.stringify(proxy),
      });
      console.log(profileID);
      const browser2 = await puppeteer.connect({
        browserWSEndpoint: startProfile2.data.wsUrl,
        defaultViewport: null,
        slowMo: 60,
      });
      console.log(1);
      const page2 = await browser2.newPage();
      assert(await goto(page2, "https://gmail.com/", { waitUntil: "load" }));
      //console.log(2);

      // await delay(5000);
      // await browser.newPage();
      // assert(await goto(page, "https://gmail.com/", { waitUntil: "load" }));

      // assert(await goto(page, "https://gmail.com/", { waitUntil: "load" }));
      // await page.type(
      //   'input[aria-label="Email or phone"]',
      //   "dung.oneadx@gmail.com",
      //   { waitUntil: "load" }
      // );
      // await delay(500);
      // await page.keyboard.press("Enter", { waitUntil: "load" });
      // await page.type(
      //   'aria-label="Enter your password"',
      //   "maibennhaubannhe75!",
      //   { waitUntil: "load" }
      // );
      // await delay(500);
      // await page.keyboard.press("Enter", { waitUntil: "load" });
      // await page.type('input[id="m_login_password"]', "maibennhaubannhe7501!");
      // await delay(500);
    } catch (error) {
      console.log(error.message);
    }

    // //get cookies
    // const page = await browser.newPage();
    // assert(await goto(page, "https://gmail.com/", { waitUntil: "load" }));
    // const cookies = await page.cookies();
    // //console.log(cookies);
    // await fs.writeFile("./cookies.txt", JSON.stringify(cookies, null, 2));

    //browser.close();
  } catch (error) {
    console.log(error.message);
  }
})();
