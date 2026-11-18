module.exports = {
  headless: false,
  stepScreenshots: true,
  baseUrl: process.env.baseUrl ?? 'https://practicetestautomation.com/',
  defaultTimeout: 180000,
  testTimeout: 180000,
  globalTimeout: 3600000,
};
