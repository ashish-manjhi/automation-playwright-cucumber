module.exports = {
  headless: true,
  screenshots: true,
  baseUrl: process.env.baseUrl ?? 'https://www.olx.com',
  defaultTimeout: 180000,
  testTimeout: 180000,
  globalTimeout: 3600000,
};
