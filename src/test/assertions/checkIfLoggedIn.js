const { LoginPage } = require("../../pageObjects")
const { expect } = require('chai');

const checkIfLoggedIn = async (isLoggedIn) => {
    if(isLoggedIn){
        expect(await LoginPage.checkIfLoggedIn(isLoggedIn)).to.be.true;
    } else {
        expect(await LoginPage.checkIfLoggedIn()).to.be.false;
    }
}

module.exports = {
    checkIfLoggedIn,
}