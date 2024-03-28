// Điều chỉnh các thông số ở đây
let newsfeedObj = {
  // thời gian lướt trong khoảng từ start tới end
  scrollTimeStart: 120, //s
  scrollTimeEnd: 240, //s
  //   hashtag
  hashtag: ["fyp", "mmo"],
  //   tỉ lệ thời gian xem trong khoảng start tới end ( ví dụ dừng lại xem video trong khoảng 60-80% tổng thời lượng video )
  timeProportionStart: 60,
  timeProportionEnd: 80,
  //   tỉ lệ like và save trong khoảng start tới end VD: 100%
  proportionStart: 100,
};
// --------------------------------------------------

let logErrors = [];
async function newsfeed(page, newsfeedObj) {
  let scrollTime =
    getRandomIntBetween(
      newsfeedObj.scrollTimeStart,
      newsfeedObj.scrollTimeEnd
    ) * 1000;
  const video = await getElement(page, '[mediatype="video"]');
  if (!video) {
    throw new Error("Video not found. Please check your selector.");
  }
  await delay(3000);
  await video.click();
  await delay(5000);
  while (scrollTime > 0) {
    let startTime = Date.now();
    const string123 = await getElement(
      page,
      '[class="css-o2z5xv-DivSeekBarTimeContainer e1rpry1m1"]',
      20
    );
    if (!string123) {
      throw new Error("Cannot get video duration. Please check your selector.");
    }
    const timeString = await page.evaluate((el) => {
      return el.innerHTML;
    }, string123);
    console.log(timeString);
    const time = extractAndConvertToSeconds(timeString) * 1000;
    const propor = getRandomIntBetween(
      newsfeedObj.timeProportionStart,
      newsfeedObj.timeProportionEnd
    );
    await delay((time * propor) / 100);
    const hashtags = newsfeedObj.hashtag;
    if (hashtags.length != 0) {
      const content = await getElement(page, '[data-e2e="browse-video-desc"]');
      const text = await page.evaluate((el) => {
        return el.textContent;
      }, content);
      const check = hashtags.find((hashtag) =>
        text.toLowerCase().includes(hashtag.toLowerCase())
      );
      if (check) {
        const rd1 = getRandomIntBetween(0, 100);
        if (rd1 < newsfeedObj.proportionStart) {
          const likeBtn = await getElement(
            page,
            '[data-e2e="browse-like-icon"]'
          );
          if (!likeBtn) {
            throw new Error(
              "Like button not found. Please check your selector."
            );
          }
          await delay(3000);
          await likeBtn.click();
          await delay(3000);
        }

        const rd2 = Math.random();
        if (rd2 < newsfeedObj.proportionStart) {
          const saveBtns = await getElements(
            page,
            '[data-e2e="undefined-icon"]'
          );
          if (!saveBtns) {
            throw new Error(
              "Save buttons not found. Please check your selector."
            );
          }
          await delay(3000);
          await saveBtns[saveBtns.length - 1].click();
          await delay(3000);
        }
      }
    }
    await clickNext(page);
    let endTime = Date.now();
    scrollTime -= endTime - startTime;
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
  await navigateToUrl(page, url);
  await newsfeed(page, newsfeedObj);
} catch (error) {
  logErrors.push({
    error: "Error during newsfeed execution",
    detail: error.message,
  });
}
return logErrors;
