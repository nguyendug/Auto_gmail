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
    const profileID = "6533e78c2717a3373f14a884";
    //63d7386552d4f7546b5fb06f
    //647eff253bb6b40724437cfe

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

    const checkCaptcha = async () => {
      const check = await page
        .$eval(`form#captcha_form`, () => true)
        .catch(() => false);
      if (check == true) {
        console.log("Tài khoản dính captcha");
      } else {
        console.log("Tài khoản không dính captcha");
      }
    };

    // const checkElement = async () => {
    //   const check = await page
    //     .$eval(`span#gh-ug.gh-ug-guest > a`, () => true)
    //     .catch(() => false);
    //   if (check == true) {
    //     console.log("Đăng nhập không thành công");
    //   } else {
    //     console.log("Đăng nhập thành công");
    //   }
    // };

    const checkSuspended = async () => {
      await page.$("h1#display-nb-welcome-msg");
      //await checkElement();
      //if(checkElement == true)
      const value = await page.evaluate((el) => el.textContent, element);
      console.log(value);
      if (value.includes(` Your account has been suspended`, 0)) {
        console.log(`Tài khoản đã bị đình chỉ`);
      } else {
        console.log("Tài khoản không bị đình chỉ");
      }
    };

    const loginEbay = async () => {
      await page.click("span#gh-ug.gh-ug-guest > a", { waitUntil: "load" });
      //await delay(2000);
      await page.click("#userid");
      await page.keyboard.type("ntdung7501@gmail.com");
      // nguyendung7501@gmail.com
      await page.keyboard.press("Enter");
      await delay(2000);
      await page.click("#pass");
      await page.keyboard.type(
        "Abcd1234!",
        { delay: 100 },
        { waitUntil: "load" }
      );
      // maibennhaubannhe75!
      await page.keyboard.press("Enter");
      await delay(2000);
      //await checkCaptcha();
      if (
        checkCaptcha == `Tài khoản không dính captcha` ||
        checkSuspended == `Tài khoản không bị đình chỉ`
      ) {
        console.log("Đăng nhập tài khoản thành công");
      } else if (checkCaptcha == `Tài khoản không dính captcha`) {
        console.log(checkCaptcha);
      } else if(checkSuspended == `Tài khoản đã bị đình chỉ`){
        console.log(checkSuspended);
      }else
      await delay(2000);
    };

    try {
      await goto(page, "https://ebay.com/", { waitUntil: "load" }); //Truy cập gmail và chờ load trang
      await delay(5000);

      // Đã đăng nhập thành công
      const elementLoginPass = await page
        .$eval(`button#gh-ug.gh-ua.gh-control`, () => true)
        .catch(() => false);

      //Check trạng thái đăng nhập
      if (elementLoginPass == true) {
        console.log("Log in thành công");
      } else {
        const element = await page.$("span#gh-ug.gh-ug-guest");
        const value = await page.evaluate((el) => el.textContent, element);
        console.log(value);
        if (value.includes(`register`, 0)) {
          console.log(`Chưa có tài khoản được log in`);
          await loginEbay();
        } else {
          console.log("Tài khoản đã bị log out");
          await loginEbay;
        }
      }
    } catch (error) {
      console.log(error.message);
    }

    browser.close();
  } catch (error) {
    console.log(error.message);
  }
})();
