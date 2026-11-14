const {
  BeforeAll,
  Before,
  BeforeStep,
  // AfterStep,
  After,
  AfterAll,
  setDefaultTimeout,
} = require('@cucumber/cucumber');
const { createPageInstance, getBrowser } = require('./global-setup');
const { globalTimeout, baseUrl, headless } = require('../config');

setDefaultTimeout(globalTimeout);

// let testTime, suiteTime;
// let dateObj;

BeforeAll(async function () {
  // dateObj = new Date();
  // console.log('Execution started ' + dateObj.toLocaleTimeString());
  console.log('Execution started ');
  // suiteTime = dateObj.getTime();
});

Before(async function () {
  const globalPage = await createPageInstance('chromium', {
    headless: headless,
    args: ['--deny-permission-prompts'],
  });
  this.page = globalPage;
  await this.page.setDefaultTimeout(globalTimeout);
  await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await this.page.waitForTimeout(10000);
  // testTime = new Date().getTime();
});

BeforeStep(async function () {
  // console.log(`Starting ${scenario.pickleStep.text}`);
});

// AfterStep(async function (scenario) {
//   console.log(`Completed ${scenario.pickleStep.text}`);
// });

After(async function () {
  const context = getBrowser();
  // console.log(`Execution completed in ${(new Date() - testTime) / 1000} ms`);
  // console.log(`Execution completed`);
  if (context) await context.close();
  if (this.page) await this.page.close();
});

AfterAll(async function () {
  console.log(
    // `Suite Execution Complete in ${(new Date() - suiteTime) / 1000} ms`,
  );
});

module.exports = {};
