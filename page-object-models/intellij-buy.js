export class IntellijBuy {
    constructor(page) {
        this.page = page;
        this.acceptCookieBtn = page.locator('[data-jetbrains-cookies-banner-action="ACCEPT_ALL"]');
        this.header = page.locator('[data-test="site-header"]');
        this.subscriptionHeader = page.locator('[data-test="buy-page-title"]');
        this.ideaProductCard = page.locator('[data-test="product-card-IntelliJ-IDEA-Ultimate"]').first();
        this.allProductsCard = page.locator('[data-test="product-card-All-Products-Pack"]').first();
        this.organizationsOption = page.getByRole('button', { name: 'For Organizations'});
        this.individualOption = page.getByRole('button', { name: 'For Individual Use' });
        this.specialCategories = page.getByRole('button', { name: 'Special Categories'});
        this.yearlyBilling = page.getByRole('button', { name: 'Yearly Billing'});
        this.monthlyBilling = page.getByRole('button', { name: 'Monthly Billing'});
        this.ideaProductCheckbox = page.locator('[data-test="checkbox"]').first();
        this.allProductsCheckbox = page.locator('[data-test="checkbox"]').nth(1);

    }

    async openIntellijBuyPage() {
        await this.page.goto('https://www.jetbrains.com/idea/buy/?section=commercial&billing=yearly');
    }

    async getSubscriptionLocatorByName(name) {
        const locators = {
            organizationsOption: this.organizationsOption,
            individualOption: this.individualOption,
            specialCategories: this.specialCategories,
        }
        return locators[name];
    }

    async getSubscriptionSuboptionLocatorByName(name) {
        const locators = {
            yearlyBilling: this.yearlyBilling,
            monthlyBilling: this.monthlyBilling,
        }
        return locators[name];
    }
}