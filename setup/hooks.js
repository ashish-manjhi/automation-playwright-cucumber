const {
  BeforeAll,
  Before,
  AfterStep,
  After,
  AfterAll,
  setDefaultTimeout,
} = require('@cucumber/cucumber');
const { createPageInstance, getBrowser } = require('./global-setup');
const {
  defaultTimeout,
  baseUrl,
  headless,
  // stepScreenshots,
} = require('../config');

setDefaultTimeout(defaultTimeout);

let testTime = 0,
  suiteTime = 0;
let stepCount = 0;

BeforeAll(async function () {
  console.log('Suite execution started ');
  suiteTime = await new Date().getTime();
});

Before(async function () {
  stepCount = 0;
  const globalPage = await createPageInstance('chromium', {
    headless: headless,
    args: ['--deny-permission-prompts'],
  });
  this.page = globalPage;
  await this.page.setDefaultTimeout(defaultTimeout);
  await this.page.goto(baseUrl, {
    waitUntil: 'domcontentloaded',
    timeout: defaultTimeout,
  });
  await this.page.waitForTimeout(10000);
  testTime = new Date().getTime();
  console.log('before completed');
});

AfterStep(function () {
  // if (stepScreenshots) {
  // const screenshot = await captureScreenshot(this.page, scenario, stepCount);
  // await this.attach(screenshot, 'image/png');
  // }
  stepCount = stepCount + 1;
  console.log('AfterStep completed');
});

After(async function (scenario) {
  const context = getBrowser();
  const totalSeconds = (new Date().getTime() - testTime) / 1000;
  const timeInMin = Math.trunc(totalSeconds / 60);
  const remSec = (totalSeconds % 60).toString().substring(0, 4);

  if (scenario.result?.status === 'FAILED') {
    const screenshot = await captureScreenshot(this.page, scenario, stepCount);
    await this.attach(screenshot, 'image/png');
    console.log(`${scenario.pickle.steps[stepCount].text} - FAILED`);
  }

  console.log(
    `"${scenario.pickle.name}" execution completed in ${timeInMin}m ${remSec}s`,
  );
  if (context) await context.close();
  if (this.page) await this.page.close();
  console.log('After completed');
});

AfterAll(async function () {
  const totalSeconds = await ((new Date().getTime() - suiteTime) / 1000);
  const timeInMin = await Math.trunc(totalSeconds / 60);
  const remSec = await (totalSeconds % 60).toString().substring(0, 4);
  console.log(`Suite execution completed in ${timeInMin}m ${remSec}s`);
});

async function captureScreenshot(page, scenario, stepCount) {
  const testCaseId = await scenario.pickle.name.match(
    new RegExp(/^(TC-[0-9].+?[ ])/gim),
  );
  const fileName = await scenario.pickle.steps[stepCount].text;
  const folderName = await testCaseId[0].trim();

  const filePath = `./output/screenshots/${folderName}/${fileName.replaceAll(' ', '_')}.png`;

  const pageScreenshot = await page.screenshot({
    path: filePath,
    type: 'png',
  });
  return pageScreenshot;
}

module.exports = {};
