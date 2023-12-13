const { ENVIRONMENT } = require('../../../environment/envConfig');
const env = require(`../../../environment/${ENVIRONMENT}Environment`);
const { HomePage } = require('../../../pageObjects/index');

const GoToPage = async (page) => {
    switch (page) {
        case 'Home':
            await browser.url(env.startUrl);
            await HomePage.waitForFormIsOpened();
            break;
        default:
            Logger.info(`Ivalid Pade ${page}`);
    }
}

module.exports = GoToPage;