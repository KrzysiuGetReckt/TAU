const Logger = require('../../../framework/logger');
const { HomePage, LoginPage } = require('../../../pageObjects');
const { pageUrl } = require('../../testData/testData');


const GoToPage = async (page) => {
    switch (page) {
        case 'Home':
            await browser.url(pageUrl.mainPage);
            await HomePage.waitForFormIsOpened();
            break;
        case 'Login':
            await browser.url(pageUrl.loginPage);
            await LoginPage.waitForFormIsOpened();
        default:
            Logger.info(`Ivalid Pade ${page}`);
    }
}

module.exports = GoToPage;