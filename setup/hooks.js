const {
  BeforeAll,
  Before,
  BeforeStep,
  AfterStep,
  After,
  AfterAll,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { createPageInstance, getBrowser, getPage } = require("./global-setup");
const { defaultTimeout, baseUrl, headless } = require("../config");

setDefaultTimeout(defaultTimeout);

let time, globalPage;
// const headless = config.headless;
// const timeout = config.defaultTimeout;

BeforeAll(async function () {
  console.log("Execution started " + defaultTimeout);
});

Before(async function () {
  globalPage = await createPageInstance("chromium", {
    headless: headless,
    args: ["--deny-permission-prompts"],
  });
  await globalPage.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await globalPage.waitForResponse((response) =>
    response.url().includes("activeview"),
  );
  page = globalPage;
  time = new Date();
});

BeforeStep(async function (scenario) {
  // console.log(scenario.pickleStep.text);
});

AfterStep(async function (scenario) {
  console.log(scenario.pickleStep.text);
});

After(async function () {
  const context = getBrowser();
  console.log(`Execution completed in ${(new Date() - time) / 1000} ms`);
  await context.close();
  await page.close();
});

AfterAll(async function () {
  // console.log("execution complete");
});

module.exports = {
  //   page,
};
