const { ENVIRONMENT } = require('../../environment/envConfig');
const env = require(`../../environment/${ENVIRONMENT}Environment`);
const { expect } = require('chai');

const {
  LoginPage,
  MainPage,
  SecurePage,
  DynamicsControls,
} = require('../pageobjects/');
const testData = require('../testData/testData');
const mainPage = require('../pageobjects/mainPage');
const Logger = require('../../framework/logger');
const dynamicControls = require('../pageobjects/dynamicControls');

/**
 * Form Authentication testing.
 *
 * Testing the functionality of logging in
 * https://the-internet.herokuapp.com
 *
 * Get on the main page         |   Assert that the main page is open
 * Click on the Login Page Link | Assert that the Login Page is open
 * Test the functionality of Logging in:
 * Correctly  |  Assert that the Page changes AND Flash alert text = "You logged into a secure area!"
 * Incorectly - Wrong Username, wrong password | Assert that the Page is the same AND  Flash alert text = "Your username is invalid!"
 * Incorectly - Correct Username, wrong password | Assert that the Page is the same AND "Your password is invalid!"
 */

describe('Login Input Page functionality', () => {
  beforeEach(async function () {
    await browser.url(env.startUrl);
  });

  /**
   * Correctly  |  Assert that the Page changes AND Flash alert text = "You logged into a secure area!"
   */
  it('Corect Login Credentials', async () => {
    expect(await MainPage.waitForFormIsOpened()).to.be.true; // WaitForFormIsOpened = Is it open assertion.
    await MainPage.clickSpecificLink(
      testData.mainPage.indexLink['Form Authentication']
    );
    expect(await LoginPage.waitForFormIsOpened()).to.be.true;
    await LoginPage.typeUsername('tomsmith');
    await LoginPage.typePassword('SuperSecretPassword!');
    await LoginPage.clickLoginBtn();
    expect(await SecurePage.waitForFormIsOpened()).to.be.true;
    expect(await SecurePage.securePageUniqeIsOpen()).to.equal('Secure Area');
    expect(await SecurePage.flashAlertText()).to.contain(
      'You logged into a secure area!'
    );
  });
  /**
   * Incorectly - Wrong Username, wrong password | Assert that the Page is the same AND  Flash alert text = "Your username is invalid!"
   */
  it('Incorrect Login Credentials', async () => {
    expect(await MainPage.waitForFormIsOpened()).to.be.true;
    await MainPage.clickSpecificLink(
      testData.mainPage.indexLink['Form Authentication']
    );
    expect(await LoginPage.waitForFormIsOpened()).to.be.true;
    await LoginPage.typeUsername('smithtom');
    await LoginPage.typePassword('123');
    await LoginPage.clickLoginBtn();
    expect(await LoginPage.waitForFormIsOpened()).to.be.true;
    expect(await LoginPage.flashAlertText()).to.contain(
      'Your username is invalid!'
    );
  });
  /**
   * Incorectly - Correct Username, wrong password | Assert that the Page is the same AND "Your password is invalid!"
   */
  it('Incorrect Login Credentials', async () => {
    expect(await MainPage.waitForFormIsOpened()).to.be.true;
    await MainPage.clickSpecificLink(
      testData.mainPage.indexLink['Form Authentication']
    );
    expect(await LoginPage.waitForFormIsOpened()).to.be.true;
    await LoginPage.typeUsername('tomsmith');
    await LoginPage.typePassword('123');
    await LoginPage.clickLoginBtn();
    expect(await LoginPage.waitForFormIsOpened()).to.be.true;
    expect(await LoginPage.flashAlertText()).to.contain(
      'Your password is invalid!'
    );
  });
});

/**
 * Dynamic Controls testing.
 *
 * Get on the main page         |   Assert that the main page is open
 * Click on the Dynamic Controls Link | Assert that the Login Page is open
 * Scenario A Checkbox:
 * Check if the checkbox is interactable | Assert checkbox is checked
 * Delete the checkbox | Assert the checkbox is missing
 * Add back the checkbox | Assert checkbox is there AND Checkbox is not checked
 * Scenario B Input:
 * Check if the input is disabled | Assert input displayed, not enable
 * Enable the input | Input is enabled
 * Type a word to the input | Assert the text is correctly send
 * Disable the input | Input is disabled
 */

describe('The Remove/Add checkbox and Enable/Disable Input', () => {
  beforeEach(async function () {
    await browser.url(env.startUrl);
  });

  it('Remove / Add checkbox functionality', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(
      testData.mainPage.indexLink['Dynamic Controls']
    );
    await DynamicsControls.waitForFormIsOpened();
    await DynamicsControls.clickCheckbox();
    expect(await DynamicsControls.checkCheckboxState()).to.be.true;
    await DynamicsControls.clickAddRemoveCheckbox();
    expect(await DynamicsControls.waitForRemoveCheckbox()).to.be.true;
    await DynamicsControls.clickAddRemoveCheckbox();
    expect(await DynamicsControls.waitForAddCheckbox()).to.be.true;
    expect(await DynamicsControls.checkNewCheckboxState()).to.be.false;
    await DynamicsControls.clickNewCheckbox();
    expect(await DynamicsControls.checkNewCheckboxState()).to.be.true;
  });
  it('Enable / Disable input functionality', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(
      testData.mainPage.indexLink['Dynamic Controls']
    );
    await DynamicsControls.waitForFormIsOpened();
    expect(await DynamicsControls.checkInputState()).to.be.false;
    await DynamicsControls.clickToggleInput();
    expect(await DynamicsControls.waitForEnabledInput()).to.be.true;
    await DynamicsControls.typeInputBox(testData.toggleEnableDisable.text);
    expect(await DynamicsControls.getTextInputBox()).to.deep.equal(
      testData.toggleEnableDisable.text,
      `Input box is not equal to ${testData.toggleEnableDisable.text}`
    );
    await dynamicControls.clickToggleInput();
    expect(await DynamicsControls.waitForDisabledInput()).to.be.true;
  });
});
