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
let vongLap = 0;
let i = 0;

!(async () => {
  try {
    const profileID = "647eff253bb6b40724437cfe";
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

    const randomSearchEbay = async () => {
      try {
        await page.click("#gh-ac");
        await delay(2000);
        const result = await fetch(
          `https://autosug.hidemyacc.com/keywords/ebay`
        );
        const movie = await result.json();
        const keywordSearch = Object.values(movie).toString();
        console.log(keywordSearch);

        await page.keyboard.type(keywordSearch);
        await page.keyboard.press("Enter", { waitUntil: "load" });
        await delay(5000);
      } catch (error) {}
    };

    const getLinkProduct = async () => {
      try {
        const news = await page.evaluate(() => {
          const SUGGESTION_SELECTOR =
            "#srp-river-results > ul > li > div > div.s-item__info > a";
          let titleNodeList = document.querySelectorAll(SUGGESTION_SELECTOR);
          // console.log(titleNodeList.length);
          // console.log("sssss", titleNodeList);
          // var ageList = document.querySelectorAll(`span.age`);
          // var scoreList = document.querySelectorAll(`span.score`);
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
          "./linkProductEbay.txt",
          JSON.stringify(news, null, 2)
        );
      } catch (error) {}
    };

    const randomClickPage = async () => {
      try {
        const topics = await page.$$("ol.pagination__items li");
        const randomNumberPage =
          Math.floor(Math.random() * topics.length + 1) + 1;
        console.log(randomNumberPage);
        // click a random topic
        await page.$eval(
          `ol.pagination__items li:nth-child(${randomNumberPage}) a`,
          (elem) => elem.click()
        );
      } catch (error) {}
    };

    try {
      await goto(page, "https://www.ebay.com/", { waitUntil: "load" });
      await delay(2000);
      //https://autosug.hidemyacc.com/keywords/ebay  API keyword
      //Random search keyword
      await randomSearchEbay();
      for (i; i < 4; i++) {
        await page.mouse.wheel({ deltaY: 800 });
        await delay(2000);
      }

      //Tìm vị trí hiện tại của trang web
      const startPosition = await page.evaluate(async () => {
        const mediary = window.scrollY;
        return mediary;
      });
      console.log(`Start point: ` + startPosition);

      // Tìm vị trí theo selector
      // Find the iframe
      const frame = await page.waitForSelector(
        `ol.pagination__items li:nth-child(2)`
      );
      // Find its coordinates
      const elementPosition = await page.evaluate((el) => {
        const { x, y } = el.getBoundingClientRect();
        return { x, y };
      }, frame);
      console.log(`Vị trí selector: ` + elementPosition.y);

      // Khoảng cách từ vị trí hiện tại đến vị trí của selector
      const distance = elementPosition.y - startPosition;
      console.log("Khoảng cách: " + distance);

      // Cuộn đến vị trí của selector
      //Âm là cuộn lên, dương là cuộn xuống
      let totalHeight = 0;
      while (totalHeight < distance) {
        try {
          // const mediary = randomnumber;
          const randomNumberPixel = Math.floor(Math.random() * 301) + 500;
          await page.mouse.wheel({ deltaY: randomNumberPixel });
          totalHeight += randomNumberPixel;
          console.log(`Total Height: ` + totalHeight);
          if (totalHeight >= elementPosition) {
            totalHeight = distance + randomNumberPixel;
          }
          const timedelay = Math.floor(Math.random() * 2001) + 1000;
          await delay(timedelay);
          console.log(`Time delay: ` + timedelay);
          //console.log(m);
        } catch (error) {
          console.log(error.message);
        }
      }
      await delay(5000);

      //get link page 1
      await getLinkProduct();
      console.log("get link 1");
      await delay(5000);

      //get link page 2
      try {
        // Random click page
        await randomClickPage();
        await delay(5000);

        //await page.click("ol.pagination__items li:nth-child(2)");
        await delay(2000);
        await getLinkProduct();
        //console.log("get link 2");
      } catch (error) {}
      await delay(5000);

      try {
        await page.click(`a#gh-la`);
        await page.mouse.wheel({ deltaY: 800 });
        await delay(2000);
        await page.mouse.wheel({ deltaY: -650 });
        await delay(2000);
        await randomSearchEbay();
        //console.log("Random search done");
        await getLinkProduct();
        //console.log("Get link product page 1");
        await delay(5000);
        await randomClickPage();
        await delay(5000);
        await getLinkProduct();
        //console.log("Get link product page 1");
      } catch (error) {}
    } catch (error) {
      console.log(error.message);
    }

    browser.close();
  } catch (error) {
    console.log(error.message);
  }
})();
