const { chromium, firefox, webkit } = require("playwright");
const { defaultTimeout } = require("../config");

let browser = null;
let browserContext = null;
let browserPage = null;

async function launchBrowser(browserType = "chromium", options = {}) {
  switch (browserType) {
    case "chromium":
      browser = await chromium.launch(options);
      break;
    case "firefox":
      browser = await firefox.launch(options);
      break;
    case "webkit":
      browser = await webkit.launch(options);
    default:
      throw new Error("Unsupported browser type");
  }
  return browser;
}

async function createPageInstance(browserType, options) {
  const browserIns = await launchBrowser(browserType, options);
  browserContext = await browserIns.newContext();
  browserPage = await browserContext.newPage();
  browserPage.setDefaultTimeout(defaultTimeout);
  browserPage.setDefaultNavigationTimeout(defaultTimeout)
  return browserPage;
}

const getBrowser = () => browserContext;
const getPage = () => browserPage;

module.exports = {
  createPageInstance,
  getBrowser,
  getPage,
};
