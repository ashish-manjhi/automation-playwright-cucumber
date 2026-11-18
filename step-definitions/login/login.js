const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
// const credentials = '../../data/credentials.json';

When('I am logged in as User', async function () {
  await login(this.page);
});

Given('I navigate to the login page', async function () {
  const isPopupVisible = await this.page
    .locator('button[class="formkit-close"]')
    .first()
    .isVisible();
  if (isPopupVisible) {
    await this.page.locator('button[class="formkit-close"]').first().click();
  }
  await this.page.locator('a>> text=Practice').first().click();
  await this.page.locator("a>>text='Test Login Page'").first().click();
  await this.page.waitForTimeout(5000);
});

async function login(page) {
  await page.locator('[id="username"]').click();
  await page.locator('[id="username"]').fill('student');
  await page.locator('input[name="password"]').fill('Password123');
  await page.locator('[id="submit"]').click();
}

Then('I see successful login message', async function () {
  const successfulLoginMessage = await this.page
    .locator('[class="post-title"]')
    .textContent();
  await expect(successfulLoginMessage).toContain('Logged In Successfully');
  const strudentGreetingMessage = await this.page
    .locator('[class="post-content"]>>strong')
    .textContent();
  await expect(strudentGreetingMessage).toContain(
    'Congratulations student. You successfully logged in!',
  );
  await expect(await this.page.url()).toContain(
    'practicetestautomation.com/logged-in-successfully/',
  );
  await this.page.locator("a>>text='Log out'").click();
});
