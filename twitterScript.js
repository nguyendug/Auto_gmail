const puppeteer = require("puppeteer-core");
const assert = require("assert");
const os = require("os");
const fs = require("fs");
const path = require("path");
const { get } = require("https");
const { error } = require("console");
const { checkPrime } = require("crypto");
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
    await goto(page, "https://twitter.com/home", {
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
  } catch (error) {
    console.log(error.message);
  }
})();
