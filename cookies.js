const puppeteer = require("puppeteer-core");
// const { scrollPageToBottom } = require("puppeteer-autoscroll-down");
// const { scrollPageToTop } = require("puppeteer-autoscroll-down");
const assert = require("assert");
const fs = require("fs").promises;
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
    // const profileId = "64b64bd2f25829e1fdcea7f9";
    const proxy = {
      mode: "none",
      host: "pr.lunaproxy.com",
      port: 12233,
      username: "user-lu2769084-region-us",
      password: "Abcd!22345",
    };
    // const success = await hidemyacc.start(profileId, {
    //   proxy: JSON.stringify(proxy),
    // });

    //set cookies
    try {
      const createProfile = await hidemyacc.create({
        name: "Test1",
        folder: "64b64fa2f25829e1fdd1e142",
      });
      console.log(createProfile.data);

      const startProfile = await hidemyacc.start(createProfile.data.id, {
        proxy: JSON.stringify(proxy),
      });

      const browser = await puppeteer.connect({
        browserWSEndpoint: startProfile.data.wsUrl,
        defaultViewport: null,
        slowMo: 60,
      });

      const page = await browser.newPage();
      const cookiesString = await fs.readFile("./cookies.txt");
      const cookies = JSON.parse(cookiesString);
      await page.setCookie(...cookies);
      //console.log(cookies);
      assert(await goto(page, "https://gmail.com/", { waitUntil: "load" }));

      assert(browser);
      await delay(5000);
      await browser.close();
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
