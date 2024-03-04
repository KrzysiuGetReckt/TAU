const { When } = require('@wdio/cucumber-framework');
const { SignIn } = require('../../support');

When(/^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/ , async (valid, email) => {
    await SignIn(valid === "valid" ? true : false , email);
})