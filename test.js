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
    // console.log("1");
    // console.log(startProfile.data);

    const browser1 = await puppeteer.connect({
      browserWSEndpoint: startProfile.data.wsUrl,
      defaultViewport: null,
      slowMo: 60,
    });

    assert(browser1);
    // const page = await browser.newPage(); //Mở 1 tab mới
    // await goto(page, "https://addmefast.com/free_points/facebook_likes", {
    //   waitUntil: "load",
    // });
    // await delay(5000);

    (async () => {
      // Mở trình duyệt 1 và thực hiện click
      //const browser1 = await puppeteer.launch();
      const page1 = await browser1.newPage();
      await page1.goto("https://addmefast.com/free_points/facebook_likes");
      await delay(10000);
      // await page1.click(`('div[class="menu"] div[class="menu_item_sub"]')[1]`, {
      //   waitUntil: "load",
      // });
      await page1.click(`div[class="fol-conf-but"] a`);
      await delay(5000);

      // Đợi cho trình duyệt thứ hai được mở và lưu trữ trình đại diện của nó
      const browser2 = await puppeteer.connect({
        browserWSEndpoint: browser1.wsEndpoint(),
      });
      const pages = await browser2.pages();
      const page2 = pages[pages.length - 1]; // Trình duyệt thứ hai là trang cuối cùng mở trong mảng các trang

      // Thực hiện các hành động trên trình duyệt thứ hai
      //await page2.goto("https://example.com");
      // Tiếp tục thực hiện các hành động khác trên trình duyệt thứ hai
      await delay(5000);
      await page2.reload();
      await page2.click('input[name="email"]:nth-child(2)');
      await page2.keyboard.type("dungnt.oneadx@gmail.com");
      await delay(10000);

      // Đóng trình duyệt khi hoàn thành
      await browser1.close();
      await browser2.close();
    })();
    // const clickButton = async () => {
    //   await page.click();
    // };

    // const randomScrollDown = async () => {
    //   let randomLoop1 = Math.floor(Math.random() * 4) + 5;
    //   while (i < randomLoop1) {
    //     i++;
    //     let randomNumberPixel = Math.floor(Math.random() * 301) + 500;
    //     await page.mouse.wheel({ deltaY: randomNumberPixel });
    //     const timedelay = Math.floor(Math.random() * 2001) + 1000;
    //     await delay(timedelay);
    //   }
    // };

    /*
    const scrollToSelector = async (element) => {
      try {
        const frame = await page.waitForSelector(element);
        const elementPosition = await page.evaluate((el) => {
          const { x, y } = el.getBoundingClientRect();
          return { x, y };
        }, frame);
        console.log(`Vị trí selector: ` + elementPosition.y);
        const distance = elementPosition.y;

        const heightPage = await page.evaluate(async () => {
          const mediary = document.documentElement.clientHeight;
          return mediary;
        });
        const heightElament = await page.evaluate(async () => {
          const mediary = document.querySelectorAll(element)[0].clientHeight;
          return mediary;
        });
        const heightt = (heightPage - heightElament) / 2;

        let totalHeight = 0;
        while (Math.abs(totalHeight) < Math.abs(distance)) {
          try {
            let randomsNumberPixel = Math.floor(Math.random() * 301) + 500;
            console.log(`Random: ` + randomsNumberPixel);
            if (distance < 0) {
              randomNumberPixel = -randomsNumberPixel;
            } else {
              randomNumberPixel = randomsNumberPixel;
            }
            console.log(`Random Pixel: ` + randomNumberPixel);
            if (
              Math.abs(totalHeight + randomNumberPixel) > Math.abs(distance)
            ) {
              randomNumberPixel = distance - totalHeight - heightt;
              await page.mouse.wheel({ deltaY: randomNumberPixel });
              break;
            }
            await page.mouse.wheel({ deltaY: randomNumberPixel });
            totalHeight += randomNumberPixel;
            console.log(`Total Height: ` + totalHeight);
            const timedelay = Math.floor(Math.random() * 2001) + 1000;
            await delay(timedelay);
            console.log(`Time delay: ` + timedelay);
          } catch (error) {
            console.log(error.message);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    */

    //await scrollToSelector(element);
    await delay(5000);
  } catch (error) {
    console.log(error.message);
  }
})();
