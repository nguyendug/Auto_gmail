const puppeteer = require("puppeteer-core");
// const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
// const { scrollPageToTop } = require("puppeteer-autoscroll-down");
const assert = require("assert");
const os = require("os");
const fs = require("fs");
//import pLimit from "p-limit";
const pLimit = require("p-limit");
//const Promise = require("bluebird");
const path = require("path");
const { get } = require("https");
const { error } = require("console");
const { checkPrime } = require("crypto");
const hidemyacc = new (require("../hidemyacc"))();
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
const limit = pLimit(2);
let vongLap = 0;

!(async () => {
  try {
    let profileID = [
      "6528b151867efd72506ee504",
      "65168015f5f03d26a022f6d7",
      "65168015f5f03d26a022f6e3",
    ];

    // // Create an array of our promises using map (fetchData() returns a promise)
    // let promises = await profileID.map((id) => {
    //   // wrap the function we are calling in the limit function we defined above
    //   return limit(async () => {
    try {
      //const profileID = "6516332bf5f03d26a009455e";
      //console.log(profileID)
      const createProfile = await hidemyacc.create({
        name: "Check back up",
        folder: "65388abd2717a3373fe50055",
      });
      console.log(createProfile.data);
      //console.log(1);
      const profileID = createProfile.data.id; //Lấy profile ID vừa tạo
      console.log(profileID);

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
        setTimeout: 1000,
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
      await goto(page, "https://mail.tm/", {
        waitUntil: "load",
      });

      const localStorage = await page.evaluate(() =>
        JSON.stringify(window.localStorage.vuex)
      );

      await fs.appendFileSync(
        "./backUp.txt",
        JSON.stringify(localStorage, null, 2)
      );
      browser.close();

      //   const checkLocalStorage = async () => {
      //     try {
      //       await goto(page, "https://mail.tm/", {
      //         waitUntil: "load",
      //         timeout: 10000,
      //       });
      //       const localStorage = await page.evaluate(() =>
      //         Object.assign({}, window.localStorage)
      //       );
      //       console.log(localStorage);
      //       if (
      //         JSON.stringify(localStorage).includes(
      //           `vosydkegtdsohh@hldrive.com`
      //         ) ||
      //         JSON.stringify(localStorage).includes(
      //           `eedxhgtbtmsit@hldrive.com`
      //         ) ||
      //         JSON.stringify(localStorage).includes(`uihkjm@hldrive.com`)
      //       ) {
      //         console.log("Local Storage Pass. ID: " + id);
      //       } else {
      //         console.log("Fail. ID: " + id);
      //       }
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   };

      //   while (vongLap < 5) {
      //     vongLap++;
      //     await checkLoginSession();
      //     await checkLocalStorage();
      //     browser.close();
      //     await deleteCache();
      //     await deleteFolderProfile();
      //     break;
      //   }
    } catch (error) {
      console.log(error.message);
    }
    //   });
    // });
    // (async () => {
    //   // Only three promises are run at once (as defined above)
    //   const result = await Promise.all(promises).then();
    //   result;
    // })();
  } catch (error) {
    console.log(error.message);
  }
})();
