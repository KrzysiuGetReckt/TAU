const { Given } = require("@wdio/cucumber-framework");
const goToUrl = require("../../support/actions/goToUrl");
const HomePage = require('../../pageObjects/homePage');

Given('A web browser is at the Google home page', async () => {
    await HomePage.pageUrl;
});