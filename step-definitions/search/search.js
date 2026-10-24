const { When, Then } = require('@cucumber/cucumber');

When(/^I search for maruti alto car$/, async function () {
  //   console.log(currentPage);
  //   console.log(globalPage);
  await this.page
    .locator('input[data-aut-id="searchBox"]')
    .waitFor({ state: 'visible' });
  await this.page.waitForTimeout(5000);
  await this.page.locator('input[data-aut-id="searchBox"]').fill('Alto');
  await this.page.locator('div[data-aut-id="btnSearch"]').click();
  await this.page.waitForTimeout(5000);
  await this.page
    .locator('[data-aut-id="itemTitle"]')
    .first()
    .waitFor({ state: 'visible' });
});

Then('I verify the search results', async function () {
  const adTitleText = await this.page
    .locator('[data-aut-id="itemTitle"]')
    .first()
    .textContent();
  if (!adTitleText.toLowerCase().includes('alto')) {
    throw new Error('Search results not matching');
  }
});
