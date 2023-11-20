const { ENVIRONMENT } = require('../../environment/envConfig');
const env = require(`../../environment/${ENVIRONMENT}Environment`);

const { expect } = require('@wdio/globals');
const { LoginPage, MainPage } = require('../pageobjects/');
const securePage = require('../pageobjects/securePage');

describe('The Login Input Page', () => {
  beforeEach(async function () {
    await browser.url(env.startUrl);
  });

  it('Corect Login Credentials Test', async () => {
    await MainPage.waitForFormIsOpened(); //Waiting for Main Page to be opened.
    await MainPage.clickFormAuthentication();
    await LoginPage.waitForFormIsOpened();
    await LoginPage.typeUsername('tomsmith');
    await LoginPage.typePassword('SuperSecretPassword!');
    await LoginPage.clickLoginBtn();
    await securePage.waitForFormIsOpened();
    await expect(await securePage.securePageUniqeIsOpen()).toHaveTextContaining(
      'Secure Area'
    );
    await expect(await securePage.flashAlertText()).toHaveTextContaining(
      'You logged into a secure area!'
    );
  });
});
