import {test, expect} from '../fixtures/ijbuy-fixtures';
import {subscriptionOptionCases} from '../data/subscription-options.json';


test.beforeEach(async ({intellijBuyPage}) => {
    await intellijBuyPage.openIntellijBuyPage();
    await intellijBuyPage.acceptCookieBtn.click();
});

test('Page is loaded correctly', async ({intellijBuyPage}) => {
    await expect(intellijBuyPage.header).toBeVisible();
    await expect(intellijBuyPage.subscriptionHeader).toBeVisible();
    await expect(intellijBuyPage.ideaProductCard).toBeVisible();
    await expect(intellijBuyPage.allProductsCard).toBeVisible();
});

for (const subscription of subscriptionOptionCases) {
    test(`Subscription option: '${subscription.name}'('${subscription.subOption}') is clickable`,
        async ({intellijBuyPage, page }) => {
        const subscriptionLocator = await intellijBuyPage.getSubscriptionLocatorByName(subscription.name);
        await subscriptionLocator.click();
        await page.reload();
        if (subscription.name !== "specialCategories") {
            const subOptionLocator = await intellijBuyPage.getSubscriptionSuboptionLocatorByName(subscription.subOption);
            await subOptionLocator.first().click();
        }
        await expect(page).toHaveURL(`${subscription.url}`);
    });
}

test('Checkboxes on items are clickable', async ({intellijBuyPage}) => {
    await intellijBuyPage.ideaProductCheckbox.check();
    await expect(intellijBuyPage.ideaProductCheckbox).toBeChecked();
    await intellijBuyPage.allProductsCheckbox.check();
    await expect(intellijBuyPage.allProductsCheckbox).toBeChecked();
});

test.skip('Pricing details for each subscription option', async ({ intellijBuyPage }) => {
    // Verifying pricing details are displayed correctly for all subscription options
});

test.skip('Pricing change at yearly and monthly subscription option',
    async ({ intellijBuyPage }) => {
    // Check that prices update correctly at toggling billing period
});

test.skip('Chosen region currency is displayed', async ({ intellijBuyPage }) => {
    // Ensure correct currency is displayed when switching regions
});

test.skip('Selected product can be added to the cart', async ({ intellijBuyPage }) => {
    // Verifying that product is correctly added to the cart or is visible on checkout page
});

test.skip('User is redirected to the checkout page at clicking Buy', async ({ intellijBuyPage }) => {
    // Check the redirection to the checkout page after selecting a subscription option
});

test.skip('Verify error handling during checkout', async ({ page }) => {
    // Test scenarios like missing required fields and ensure proper error messages are displayed
});

//Also could be added a variety of tests that verify the correctness of the links redirection and clickability,
// possibility to request a trial, check all the footer links. But this depends on the way the automated testing is
// written and performed. Accessibility testing is not described as I don't have experience with it and don't know
// the possibilities of Playwright in that field.