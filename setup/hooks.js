const {
  BeforeAll,
  Before,
  BeforeStep,
  AfterStep,
  After,
  AfterAll,
  setDefaultTimeout,
} = require('@cucumber/cucumber');
const { createPageInstance, getBrowser } = require('./global-setup');
const { defaultTimeout, baseUrl, headless } = require('../config');

setDefaultTimeout(defaultTimeout);

let time;

BeforeAll(async function () {
  console.log('Execution started');
});

Before(async function () {
  const globalPage = await createPageInstance('chromium', {
    headless: headless,
    args: ['--deny-permission-prompts'],
  });
  this.page = globalPage;
  await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await this.page.waitForTimeout(10000);
  time = new Date();
});

BeforeStep(async function (scenario) {
  console.log(scenario.pickleStep.text);
});

AfterStep(async function (scenario) {
  console.log(scenario.pickleStep.text);
});

After(async function () {
  const context = getBrowser();
  console.log(`Execution completed in ${(new Date() - time) / 1000} ms`);
  if (context) await context.close();
  if (this.page) await this.page.close();
});

AfterAll(async function () {
  // console.log("execution complete");
});

module.exports = {
};
