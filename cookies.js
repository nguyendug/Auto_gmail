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
const limit = pLimit(2);
let vongLap = 0;

!(async () => {
  // let i = 0;
  // while (i < 2) {
  //   i++;
  try {
    let profileID = [
      "6528b151867efd72506ee504",
      "65168015f5f03d26a022f6d7",
      "65168015f5f03d26a022f6e3",
    ];

    let mailTM = [
      "vosydkegtdsohh@hldrive.com",
      "eedxhgtbtmsit@hldrive.com",
      "uihkjm@hldrive.com",
    ];
    // Create an array of our promises using map (fetchData() returns a promise)
    let promises = await profileID.map((id) => {
      // wrap the function we are calling in the limit function we defined above
      return limit(async () => {
        try {
          //const profileID = "6516332bf5f03d26a009455e";
          //console.log(profileID)
          const proxy = {
            mode: "none",
            host: "pr.lunaproxy.com",
            port: 12233,
            username: "user-lu2769084-region-us",
            password: "Abcd!22345",
          };

          //Start profile
          const startProfile = await hidemyacc.start(id, {
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

          while (vongLap < 5) {
            vongLap++;
            const checkLoginSession = async () => {
              try {
                await goto(page, "https://gmail.com/", { waitUntil: "load" });
                await delay(5000);
                const cookies = await page.cookies();
                //console.log(cookies);
                const isFound = cookies.some((element) => {
                  if (element.name === "GMAIL_AT") {
                    return true;
                  }
                  return false;
                });
                if (isFound == true) {
                  console.log("Login session pass. Profile ID: " + id);
                } else {
                  console.log("Login session fail. Profile ID:  " + id);
                }
                //break;
              } catch (error) {}
            };

            const checkLocalStorage = async () => {
              try {
                await goto(page, "https://mail.tm/", {
                  waitUntil: "load",
                  timeout: 10000,
                });

                const localStorage = await page.evaluate(() =>
                  Object.assign({}, window.localStorage)
                );
                // "hgjakndiikpfdov@diginey.com"
                // "xxbbpobjyrckm@diginey.com"
                if (JSON.stringify(localStorage).includes(mailTM)) {
                  console.log("Local Storage Pass. ID: " + id);
                } else {
                  console.log("Fail. ID: " + id);
                }
                //break;
              } catch (error) {
                console.log(error);
              }
            };
            await checkLoginSession();
            await checkLocalStorage();

            break;
          }
          //console.log(`=========`);

          // while (vongLap < 5) {
          //   vongLap++;
          //   try {
          //     await goto(page, "https://mail.tm/", {
          //       waitUntil: "load",
          //       timeout: 10000,
          //     });

          //     const localStorage = await page.evaluate(() =>
          //       Object.assign({}, window.localStorage)
          //     );
          //     // "hgjakndiikpfdov@diginey.com"
          //     // "xxbbpobjyrckm@diginey.com"
          //     if (
          //       JSON.stringify(localStorage).includes(
          //         `vosydkegtdsohh@hldrive.com`
          //       ) ||
          //       JSON.stringify(localStorage).includes(
          //         `eedxhgtbtmsit@hldrive.com`
          //       ) ||
          //       JSON.stringify(localStorage).includes(`uihkjm@hldrive.com`)
          //     ) {
          //       console.log("Local Storage Pass. ID: " + id);
          //     } else {
          //       console.log("Fail. ID: " + id);
          //     }
          //     break;
          //   } catch (error) {
          //     console.log(error);
          //   }
          // }

          browser.close();
        } catch (error) {
          console.log(error.message);
        }
      });
    });
    (async () => {
      // Only three promises are run at once (as defined above)
      const result = await Promise.all(promises).then();
      //console.log(1);
      result;
      //console.log(result);
    })();

    // while (vongLap < profileID.length) {
    //   vongLap++;
    //   try {
    //     await delay(5000);
    //     //Nối chuỗi xóa folder cache-profile
    //     const profileCachePath = path.join(
    //       hidemyaccCachePath,
    //       profileID[vongLap]
    //     );
    //     // console.log(profileCachePath);
    //     //Kiểm tra folder có tồn tại và xóa folder có file
    //     if (fs.existsSync(profileCachePath)) {
    //       fs.rmSync(profileCachePath, { recursive: true, force: true });
    //       console.log("Delete cache pass. Profile ID: " + profileID[vongLap]);
    //     } else {
    //       console.log(
    //         "Folder cache not found. Profile ID: " + profileID[vongLap]
    //       );
    //     }
    //     //Nối chuỗi xóa folder profile
    //     const folderProifle = "hma_" + profileID[vongLap];
    //     //console.log(folderProifle);
    //     const profilePath = path.join(hidemyaccProfilePath, folderProifle);
    //     // console.log(profilePath);
    //     //Kiểm tra folder có tồn tại và xóa folder có file
    //     if (fs.existsSync(profilePath)) {
    //       fs.rmSync(profilePath, { recursive: true, force: true });
    //       console.log("Delete profile pass. Profile ID: " + profileID[vongLap]);
    //     } else {
    //       console.log(
    //         "Folder profile not found. Profile ID: " + profileID[vongLap]
    //       );
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // }
  } catch (error) {
    console.log(error.message);
  }
  //   console.log("Done " + i);
  //   console.log("-------------------");
  // }
})();
