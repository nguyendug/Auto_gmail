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
    await goto(page, "https://hidemyacc.com/blog?page=1", {
      waitUntil: "load",
    });
    await delay(5000);

    // const bodyHandle = await page.$("body");
    // const boundingBox = await bodyHandle.boundingBox();
    // const height = boundingBox.height;
    // console.log("height: " + height);
    // const altHeight = await page.evaluate(
    //   () => document.documentElement.offsetHeight
    // );
    // console.log("altHeight: " + altHeight);
    const randomScrollDown = async () => {
      let randomLoop1 = Math.floor(Math.random() * 4) + 5;
      while (i < randomLoop1) {
        i++;
        let randomNumberPixel = Math.floor(Math.random() * 301) + 500;
        await page.mouse.wheel({ deltaY: randomNumberPixel });
        const timedelay = Math.floor(Math.random() * 2001) + 1000;
        await delay(timedelay);
      }
    };

    const scrollToSelector = async (element) => {
      try {
        //Tìm vị trí hiện tại của trang web
        // const startPosition = await page.evaluate(async () => {
        //   const mediary = window.scrollY;
        //   return mediary;
        // });
        // console.log(`Start point: ` + startPosition);

        const frame = await page.waitForSelector(element);
        const elementPosition = await page.evaluate((el) => {
          const { x, y } = el.getBoundingClientRect();
          return { x, y };
        }, frame);
        console.log(`Vị trí selector: ` + elementPosition.y);

        const distance = elementPosition.y; //- startPosition;
        // console.log("Khoảng cách: " + distance);

        let totalHeight = 0;
        if (elementPosition.y >= 0) {
          while (totalHeight < distance) {
            try {
              console.log(`1000`);
              let randomNumberPixel = Math.floor(Math.random() * 301) + 500;
              console.log(`Random: ` + randomNumberPixel);
              if (totalHeight + randomNumberPixel > distance) {
                const heightPage = await page.evaluate(async () => {
                  const mediary = document.documentElement.clientHeight;
                  return mediary;
                });

                const heightElament = await page.evaluate(async () => {
                  const mediary = document.querySelectorAll(
                    `a[href="/blog/proxy-for-google-ads-part-2"]:nth-child(2)`
                  ).clientHeight;
                  return mediary;
                });
                //console.log(`Height /2: `, heighttt / 2);
                randomNumberPixel =
                  distance - totalHeight - (heightPage - heightElament) / 2;
                await page.mouse.wheel({ deltaY: randomNumberPixel });
                break;
              }
              await page.mouse.wheel({ deltaY: randomNumberPixel });
              totalHeight += randomNumberPixel;
              console.log(`Total Height: ` + totalHeight);
              const timedelay = Math.floor(Math.random() * 2001) + 1000;
              await delay(timedelay);
              console.log(`Time delay: ` + timedelay);
              //console.log(m);
            } catch (error) {
              console.log(error.message);
            }
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    await randomScrollDown();
    await delay(3000);

    // const element = `a[href="/blog/proxy-for-google-ads-part-2"]:nth-child(2)`;
    const element = `a[href="/blog/review-ip-royal-2023--details--pricing-and-features"]:nth-child(2)`;
    await scrollToSelector(element);
    await delay(5000);
  } catch (error) {
    console.log(error.message);
  }
})();
