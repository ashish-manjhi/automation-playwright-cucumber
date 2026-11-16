module.exports = {
  headless: true,
  stepScreenshots: true,
  baseUrl: process.env.baseUrl ?? 'https://www.olx.in',
  defaultTimeout: 180000,
  testTimeout: 180000,
  globalTimeout: 3600000,
};
