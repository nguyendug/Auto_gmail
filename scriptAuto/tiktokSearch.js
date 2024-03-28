// Điều chỉnh các thông số ở đây
const filePath = "C:/tiktok/keyword.txt";
//Số video xem
const numVideoStart = 5;
const numVideoEnd = 10;
// tỉ lệ % thời gian xem 1 video trong khoảng start tới end VD 70-130%
const proportionStart = 70;
const proportionEnd = 130;
// --------------------------------------------------
let logErrors = [];
async function search(page, keyword, numVideo) {
  const searchBox = await getElement(page, '[type="search"]');
  if (!searchBox) {
    throw new Error("Cannot find search box. Please check your selector");
  }
  await delay(3000);
  await searchBox.click();
  await delay(3000);
  await page.keyboard.type(keyword, { delay: 200 });
  await delay(3000);
  await page.keyboard.press("Enter");
  await delay(8000);
  const video = await getElement(page, '[mediatype="video"]');
  if (!video) {
    const images = await getElements(page, "picture");
    if (!images) {
      throw new Error("Cannot click to video. Please check your selector");
    }
    await delay(2000);
    await images[1].click();
    await delay(3000);
  } else {
    await delay(3000);
    await video.click();
    await delay(5000);
  }
  let count = 0;
  while (count < numVideo) {
    const str = await getElement(
      page,
      '[class="css-o2z5xv-DivSeekBarTimeContainer e1rpry1m1"]',
      20
    );
    if (!str) {
      throw new Error("Cannot get video duration. Please check your selector.");
    }
    const timeString = await page.evaluate((el) => {
      return el.innerHTML;
    }, str);
    const time = extractAndConvertToSeconds(timeString) * 1000;
    const propor = getRandomIntBetween(proportionStart, proportionEnd) / 100;
    await delay(time * propor);
    await clickNext(page);
    await delay(2000);
    count++;
  }
}
const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
const clickNext = async (page) => {
  const nextBtn = await getElement(page, '[data-e2e="arrow-right"]');
  if (!nextBtn) {
    throw new Error("Can't find next button. Please check your selector.");
  }
  await delay(3000);
  await nextBtn.click();
  await delay(3000);
};
const extractAndConvertToSeconds = (inputStr) => {
  // Split the input string by the slash to separate the times
  const parts = inputStr.split("/");
  // We're interested in the second part, i.e., after the slash
  const timeStr = parts[1];
  // Split the time string into minutes and seconds
  const timeParts = timeStr.split(":");
  // Convert both to integers
  const minutes = +timeParts[0];
  const seconds = +timeParts[1];
  // Calculate total seconds
  const totalSeconds = minutes * 60 + seconds;
  return totalSeconds;
};
const getElement = async (page, selector, loop = 10) => {
  let element;
  for (let i = 0; i < loop; i++) {
    try {
      element = await page.$(selector, { timeout: 1000 });
    } catch (error) {
      element = null;
    }
    if (element) return element;
    await delay(1000);
  }
};
const getElements = async (page, selector, loop = 10) => {
  let elements;
  for (let i = 0; i < loop; i++) {
    try {
      elements = await page.$$(selector, { timeout: 1000 });
    } catch (error) {
      elements = null;
    }
    if (elements && elements.length) return elements;
    await delay(1000);
  }
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomIntBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
async function navigateToUrl(page, url) {
  try {
    await page.goto(url, {
      waitUntil: "networkidle2",
    });
  } catch (error) {
    throw new Error(`Error navigating to URL: ${url}. ${error.message}`);
  }
}
try {
  const url = "https://www.tiktok.com/";
  await page.goto(url);
  await navigateToUrl(page, url);
  const data = await fs.readFileSync(filePath, "utf8");
  const arrayOfStrings = data.split(/\r?\n/);
  const keyword =
    arrayOfStrings[getRandomIntBetween(0, arrayOfStrings.length - 1)];
  const numVideo = getRandomIntBetween(numVideoStart, numVideoEnd);
  await search(page, keyword, numVideo);
} catch (error) {
  logErrors.push({
    error: "Error during newsfeed execution",
    detail: error.message,
  });
}
return logErrors;
