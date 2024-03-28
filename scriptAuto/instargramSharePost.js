const puppeteer = require("puppeteer-core");
const assert = require("assert");
const os = require("os");
const fs = require("fs");
const path = require("path");
const { get } = require("https");
const { error } = require("console");
const { checkPrime } = require("crypto");
const hidemyacc = new (require("../hidemyacc"))();
//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
      setTimeout: 5000,
    });

    const browser = await puppeteer.connect({
      browserWSEndpoint: startProfile.data.wsUrl,
      defaultViewport: null,
      slowMo: 60,
    });

    assert(browser);
    const page = await browser.newPage();

    async function checkURL(page, url) {
      try {
        if (url.includes("https://www.instagram.com/")) {
          await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
          });
        } else {
          await delay(3000);
          throw new Error("Wrong url");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }

    const delay = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));

    let logErrors = [];

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async function watchReels(page, duration, maxLikes) {
      let countLike = 0;
      let lastProcessedIndex = 0;
      const startTime = new Date().getTime();
      const endTime = startTime + duration;

      await page.click("svg.x1lliihq.x1n2onr6.x5n08af[aria-label='Reels']");
      await delay(5000);

      while (new Date().getTime() <= endTime) {
        const itemReels = await page.$$("div.xgv127d");
        if (itemReels.length > 0) {
          let currentTime = new Date().getTime();
          if (currentTime - startTime < duration * 0.3) {
            await page.keyboard.down("PageDown");
            await delay(getRandomInt(5, 30) * 1000);
            console.log(delay);
            lastProcessedIndex++;
            continue;
          }

          const likeButton = await itemReels[lastProcessedIndex].$(
            'svg[aria-label="Like"]'
          );

          if (likeButton) {
            if (countLike >= maxLikes) {
              await page.keyboard.down("PageDown");
              const x = getRandomInt(5, 30) * 1000;
              console.log(x);
              await delay(x);
              continue;
            }
            const shouldLike = getRandomInt(0, 2) === 0;

            if (shouldLike) {
              await likeButton.click();
              await delay(2000);
              countLike++;
            }
            lastProcessedIndex++;
          } else {
            throw new Error("Can't find like button");
          }

          await page.keyboard.down("PageDown");
          await delay(getRandomInt(5, 30) * 1000);
        } else {
          throw new Error("Can't find reels post");
        }
      }
    }

    try {
      const url = "https://www.instagram.com/";
      await checkURL(page, url);
      const buttonLogin = await page.$$("button._ap30[type='submit']");
      if (buttonLogin.length > 0) {
        throw new Error("Not logged in yet");
      } else {
        await watchReels(page, 240000, 2);
      }
    } catch (error) {
      logErrors.push({
        error: "Error during watch reels(just like)",
        detail: error.message,
      });
    }
    console.log(logErrors);
    //return logErrors;
    await browser.close();
    //console.log(logErrors);
  } catch (error) {
    console.log(error.message);
  }
})();
