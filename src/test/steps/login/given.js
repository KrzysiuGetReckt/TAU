const { Given } = require("@wdio/cucumber-framework");
const { GoToPage } = require('../../support');
const { checkTitle } = require("../../assertions/checkTitle");

Given(/^the browser is at the "(Login|Another)" page$/,  async (page) => {
    await GoToPage(page);
})
