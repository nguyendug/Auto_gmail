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

let i = 0;

!(async () => {
  try {
    const profileID = "647eff253bb6b40724437cfe";
    //console.log(profileID

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
    await delay(5000);
    const scrollToSelector = async (element) => {
      try {
        //Tìm vị trí hiện tại của trang web
        const startPosition = await page.evaluate(async () => {
          const mediary = window.scrollY;
          return mediary;
        });
        console.log(`Start point: ` + startPosition);

        // Tìm vị trí theo selector
        // Find the iframe
        const frame = await page.waitForSelector(element);
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
        while (Math.abs(totalHeight) < Math.abs(distance)) {
          try {
            // const mediary = randomnumber;
            let randomNumberPixel = Math.floor(Math.random() * 301) + 500;
            console.log(`Random: ` + randomNumberPixel);
            if (distance < 0) {
              randomsNumberPixel = -randomNumberPixel;
            } else {
              randomsNumberPixel = randomNumberPixel;
            }
            console.log(`Random Pixel: ` + randomsNumberPixel);

            if (
              Math.abs(totalHeight + randomsNumberPixel) > Math.abs(distance)
            ) {
              randomsNumberPixel = distance - totalHeight;
            }
            await page.mouse.wheel({ deltaY: randomsNumberPixel });
            totalHeight += randomsNumberPixel;
            console.log(`Total Height: ` + totalHeight);
            // if (totalHeight >= distance) {
            //   totalHeight = distance - totalHeight;
            //   console.log("Total Height 2: " + totalHeight);
            //   break;
            // }
            const timedelay = Math.floor(Math.random() * 2001) + 1000;
            await delay(timedelay);
            console.log(`Time delay: ` + timedelay);
            //console.log(m);
          } catch (error) {
            console.log(error.message);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    while (i < 5) {
      i++;
      let randomNumberPixel = Math.floor(Math.random() * 301) + 500;
      await page.mouse.wheel({ deltaY: randomNumberPixel });
      const timedelay = Math.floor(Math.random() * 2001) + 1000;
      await delay(timedelay);
    }
    await delay(5000);

    const randomLike = async () => {
      try {
        await page.waitForSelector(`div[data-testid="cellInnerDiv"]`);
        const topics = await page.$$(`div[data-testid="cellInnerDiv"]`);
        const randomNumberPage =
          Math.floor(Math.random() * topics.length + 1) + 1;
        console.log(randomNumberPage);
        // click a random topic
        const element = `div[data-testid="cellInnerDiv"]:nth-child(${randomNumberPage}) div[data-testid="like"]`;
        await scrollToSelector(element);
        await delay(5000);
        await page.$eval(element, (elem) => elem.click());
        await delay(5000);
      } catch (error) {
        console.log(error.message);
      }
    };

    // await page.click(
    //   `div[data-testid="cellInnerDiv"]:nth-child(2) div[data-testid="like"]`
    // );
    // await delay(5000);
    await randomLike();
    await delay(5000);

    //browser.close();
  } catch (error) {
    console.log(error.message);
  }
})();
