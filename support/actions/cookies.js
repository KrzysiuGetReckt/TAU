const homePage = require("../../pageObjects/homePage");

const delineCookies = async () => {
    return homePage.declineCookies();
}

const acceptCookies = async () => {
    return homePage.acceptCookies();
}


module.exports = {delineCookies, acceptCookies};