const { When } = require('@wdio/cucumber-framework');
const { Search } = require('../../support');
const { HomePage } = require('../../../pageObjects/');

When(/^the user searches for "(.*)"$/, async (keyword) => {
    await Search(keyword);
});

When(/^the user clicks on the "(.*)" menu option in the menu$/, async (keyword) => {
    await HomePage.navigation(keyword).click();
});