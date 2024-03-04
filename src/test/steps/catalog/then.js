const { Then } = require('@wdio/cucumber-framework');
const { toBeFound } = require('../../assertions/checkProduct');
const { checkNoProducts } = require('../../assertions/checkNoProducts');
const { checkProductsContain } = require('../../assertions/checkProductsContain');
const { checkTitle } = require('../../assertions/checkTitle');
const Logger = require('../../../framework/logger');

Then(/^(no )?product is shown$/, async (notListed) => {
    if(notListed){
       await toBeFound(false);
    } else {
        await toBeFound(true);
    }
});

Then("a no results error message is shown", async () => {
    await checkNoProducts();
});

Then(/^the product results is related to "(.*)"$/, async (keyword) => {
    await checkProductsContain(keyword);
});

Then(/^the title of the page should be "(.*)"$/, async (title) => {
    await checkTitle(title);
})