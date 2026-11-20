const secrets = JSON.parse(`${process.env.CONFIG_SECRETS}`);

module.exports = {
  headless: true,
  stepScreenshots: true,
  baseUrl: process.env.baseUrl ?? 'https://practicetestautomation.com/',
  defaultTimeout: 180000,
  testTimeout: 180000,
  validUsername: secrets.PROD_VALID_USERNAME
    ? `${secrets.PROD_VALID_USERNAME}`
    : 'student',
  validPassword: secrets.PROD_VALID_PASSWORD
    ? `${secrets.PROD_VALID_PASSWORD}`
    : 'Password123',
  invalidUsername: secrets.PROD_INVALID_USERNAME
    ? `${secrets.PROD_INVALID_USERNAME}`
    : 'stude',
  invalidPassword: secrets.PROD_INVALID_PASSWORD
    ? `${secrets.PROD_INVALID_PASSWORD}`
    : 'Password',
};
