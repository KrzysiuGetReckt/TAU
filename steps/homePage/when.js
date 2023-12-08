const { When } = require("@wdio/cucumber-framework");
const googleSearch = require("../../support/actions/search");
const { delineCookies } = require('../../support/actions/cookies');
const HomePage = require('../../pageObjects/homePage');


When(/^The user enters "(.*)" into the search bar$/,async (keyword) => {
    await delineCookies();
    await googleSearch(keyword);
});