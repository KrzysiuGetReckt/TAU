const { When } = require('@wdio/cucumber-framework');
const { Search } = require('../../support');

When(/^the user searches for "(.*)"$/, async (keyword) => {
    await Search(keyword);
});