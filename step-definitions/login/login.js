// const { Given } = require('@cucumber/cucumber');
// // const { getPage } = require('../../setup/global-setup');
// // const { expect } = require('@playwright/test');
// // const credentials = '../../data/credentials.json';

// const browserPage = getPage();
// Given('I am logged in {string}', async function (string) {
//   await login(string);
// });

// async function login(user) {
//   await browserPage.waitForTimeout(5000);
//   await browserPage
//     .locator('//button[@data-aut-id="btnLogin"]')
//     .waitFor({ state: 'visible' });
//   await browserPage.locator('//button[@data-aut-id="btnLogin"]').click();
//   await browserPage.waitForSelector('[data-aut-id="emailLogin"]');
//   await browserPage.locator('[data-aut-id="emailLogin"]').click();
//   await browserPage.waitForTimeout(3000);
//   await browserPage.waitForSelector('[id="email_input_field"]');
//   // await expect(browserPage.locator('[data-aut-id="submitBtn"]')).toBeDisabled();
//   await browserPage.waitForTimeout(3000);
//   await browserPage.locator('[id="email_input_field"]').click();
//   await browserPage.locator('[id="email_input_field"]').fill(username);
//   await browserPage.waitForTimeout(3000);
//   // await browserPage.waitForSelector('[data-aut-id="submitBtn"]:not[disabled]');
//   await browserPage
//     .locator('[data-aut-id="submitBtn"]')
//     .waitFor({ state: 'visible' });
//   await browserPage.locator('[data-aut-id="submitBtn"]').click();
//   await browserPage.waitForTimeout(3000);
//   await browserPage.locator('input[name="password"]').fill(password);
//   await browserPage.waitForTimeout(3000);
//   await browserPage.locator('button[data-aut-id="login-form-submit"]').click();

//   console.log('Logging in');
// }
