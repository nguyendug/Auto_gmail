const puppeteer = require("puppeteer-core");
const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
const { scrollPageToTop } = require("puppeteer-autoscroll-down");
const assert = require("assert");
const os = require("os");
const fs = require("fs");
//const pLimit = require("p-limit");
//const Promise = require("bluebird");
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

const hidemyaccProfilePath = path.join(os.homedir(), ".hidemyacc", "profiles");

!(async () => {
  try {
    const profileID = "65cf38fdcad24052cb6d041d";
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
    //const inforProfile = await hidemyacc.profiles(id);
    const browser = await puppeteer.connect({
      browserWSEndpoint: startProfile.data.wsUrl,
      defaultViewport: null,
      slowMo: 60,
    });
    // console.log(inforProfile.data.name);
    assert(browser);
    const page = await browser.newPage(); //Mở 1 tab mới

    const getUIDfacebook = async () => {
      try {
        const news = await page.evaluate(() => {
          const SUGGESTION_SELECTOR = `div[role="main"] div[role="article"]>div>div>div>div>div>div>div>div>div>div>div>div>div span>span>span>span>a`;
          let titleNodeList = document.querySelectorAll(SUGGESTION_SELECTOR);
          var titleLinkArray = [];
          for (var i = 0; i < titleNodeList.length; i++) {
            titleLinkArray[i] = titleNodeList[i].innerText;
            link: (titleLinkArray[i] = titleNodeList[i].getAttribute("href")),
              // age: ageList[i].innerText.trim(),
              // score: scoreList[i].innerText.trim()
              console.log(titleLinkArray);
          }
          return titleLinkArray;
        });
        //console.log(news);
        await fs.appendFileSync(
          "./dtlPostUID.txt",
          JSON.stringify(news, null, 2)
        );
      } catch (error) {}
    };

    try {
      await goto(page, "https://www.facebook.com/profile.php", {
        waitUntil: "load",
      });
      await delay(5000);
      for (let i = 0; i < 20; i++) {
        await page.mouse.wheel({ deltaY: 800 });
        await delay(2000);
      }
      await getUIDfacebook();
      console.log("get link 1");
      await delay(5000);
    } catch (error) {
      console.log(error.message);
    }

    browser.close();
  } catch (error) {
    console.log(error.message);
  }
})();
