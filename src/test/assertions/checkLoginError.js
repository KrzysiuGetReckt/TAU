const { expect } = require("chai");
const { LoginPage } = require("../../pageObjects");


const checkErrorMessage = async (errorMessage) => {
    return expect(errorMessage).to.equal(await LoginPage.getErrorMessageText());
}

module.exports = {
    checkErrorMessage,
}