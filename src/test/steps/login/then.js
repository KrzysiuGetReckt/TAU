const { Then } = require('@wdio/cucumber-framework');
const { checkIfLoggedIn } = require('../../assertions/checkIfLoggedIn');
const { checkErrorMessage } = require('../../assertions/checkLoginError');

Then(/^the user is (not )?logged in$/, async (isLoggedIn) => {
    if(isLoggedIn){
        await checkIfLoggedIn(true);
    } else {
        await checkIfLoggedIn(false);
    }
});

Then(/^a alert is shown with the message "(.*)"$/, async (errorMessage) => {
    await checkErrorMessage(errorMessage);
});