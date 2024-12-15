import { test as baseTest } from '@playwright/test';
import {IntellijBuy} from '../page-object-models/intellij-buy';

exports.test = baseTest.test.extend({
    async intellijBuyPage({ page }, use){
        const intellijBuyPage = new IntellijBuy(page);
        await use(intellijBuyPage);
    }
});
exports.expect = baseTest.expect;