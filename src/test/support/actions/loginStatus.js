const { LoginPage } = require("../../../pageObjects");

const LoginStatus = async (isNotLoggedIn) => {
    return await LoginPage.checkIfLoggedIn(isNotLoggedIn);
}

module.exports = LoginStatus;