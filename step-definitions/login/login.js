const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
// const { expect } = require('@playwright/test');
// const credentials = '../../data/credentials.json';

When('I am logged in as {string}', async function (string) {
  await login(this.page, string);
});

Given('I navigate to the login page', async function () {
  const isPopupVisible = await this.page
    .locator('button[class="formkit-close"]')
    .first()
    .isVisible();
  if (isPopupVisible) {
    await this.page.locator('button[class="formkit-close"]').first().click();
    console.log('clicked popup');
  }
  await this.page.locator('a>> text=Practice').first().click();
  await this.page.locator("a>>text='Test Login Page'").first().click();
});

async function login(page) {
  await page.locator('[id="username"]:not[disabled]').fill('student');
  await page.locator('input[name="password"]').fill('Password123');
  await this.page.waitForTimeout(3000);
  await this.page.locator('[id="submit"]').click();

  console.log('Logging in');
}

Then('I see successful login message', async function () {
  const successfulLoginMessage = await this.page
    .locator('[class="post-title"]')
    .textContent();
  await expect(successfulLoginMessage).toContainText('Logged In Successfully');
  const strudentGreetingMessage = await this.page
    .locator('[class="post-content"]>>strong')
    .textContent();
  await expect(strudentGreetingMessage).toContainText(
    'Congratulations student. You successfully logged in!',
  );
  await expect(await this.page.url()).toContain(
    'practicetestautomation.com/logged-in-successfully/',
  );
});
