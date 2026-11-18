module.exports = {
  headless: true,
  stepScreenshots: true,
  baseUrl: process.env.baseUrl ?? 'https://practicetestautomation.com/',
  defaultTimeout: 180000,
  testTimeout: 180000,
};
