const { Given } = require("@wdio/cucumber-framework");
const { GoToPage } = require('../../support');


Given(/^the browser is at the "(Home|Another)" page$/, async (page) => {
    await GoToPage(page);
});

