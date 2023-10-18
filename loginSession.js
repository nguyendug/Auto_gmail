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
// const { pageExtend } = require("puppeteer-jquery");
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

!(async () => {
  try {
    const profileID = "63d7386552d4f7546b5fb06f";
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
    assert(browser);
    const page = await browser.newPage(); //Mở 1 tab mới
    try {
      await goto(page, "https://ebay.com/", { waitUntil: "load" }); //Truy cập gmail và chờ load trang
      await delay(5000);
      //Đã đăng nhập thành công
      //   try {
      //     await page.waitForSelector("button#gh-ug.gh-ua.gh-control");
      //     console.log("found");
      //   } catch {
      //     console.log("not found");
      //   }

      // Lấy text tại button đăng nhập
      $(document).ready(function () {
        let getText = $(`span#gh-ug.gh-ug-guest`).text();
        console.log(getText);
      });
    } catch (error) {
      console.log(error.message);
    }

    browser.close();
  } catch (error) {
    console.log(error.message);
  }
})();
