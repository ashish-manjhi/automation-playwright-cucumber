const { Given, Then, When } = require("@cucumber/cucumber");
const { getPage } = require("../../setup/global-setup");
const { expect } = require("@playwright/test");
const credentials = "../../data/credentials.json";

Given("I am logged in {string}", async function (string) {
  await login(string);
});

async function login(user) {
  await page.waitForTimeout(5000);
  await page
    .locator('//button[@data-aut-id="btnLogin"]')
    .waitFor({ state: "visible" });
  await page.locator('//button[@data-aut-id="btnLogin"]').click();
  await page.waitForSelector('[data-aut-id="emailLogin"]');
  await page.locator('[data-aut-id="emailLogin"]').click();
  await page.waitForTimeout(3000);
  await page.waitForSelector('[id="email_input_field"]');
  // await expect(page.locator('[data-aut-id="submitBtn"]')).toBeDisabled();
  await page.waitForTimeout(3000);
  await page.locator('[id="email_input_field"]').click();
  await page
    .locator('[id="email_input_field"]')
    .fill(username);
  await page.waitForTimeout(3000);
  // await page.waitForSelector('[data-aut-id="submitBtn"]:not[disabled]');
  await page.locator('[data-aut-id="submitBtn"]').waitFor({ state: "visible" });
  await page.locator('[data-aut-id="submitBtn"]').click();
  await page.waitForTimeout(3000);
  await page.locator('input[name="password"]').fill(password);
  await page.waitForTimeout(3000);
  await page.locator('button[data-aut-id="login-form-submit"]').click();

  console.log("Logging in");
}
