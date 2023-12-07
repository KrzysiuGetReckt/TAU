const { ENVIRONMENT } = require('../../environment/envConfig');
const env = require(`../../environment/${ENVIRONMENT}Environment`);
const { expect } = require('chai');

const {
  LoginPage,
  MainPage,
  SecurePage,
  DynamicsControls,
  HoverPage,
  KeyPressesPage,
  MultipleWindows,
  NewWindow,
  WyswingEditor,
  WyswingEditorIframe,
  Dropdown,
  JavascriptAlerts,
  AddRemoveElements,
} = require('../pageobjects/');
const TestData = require('../testData/testData');
const GeneratorUtils = require('../../framework/Utils/generatorUtils');
const createMultipleAddRemoveElements = require('../steps/createMultipleAddRemoveElements');

/**
 * Form Authentication testing.
 *
 * Testing the functionality of logging in
 * https://the-internet.herokuapp.com
 *
 * Get on the main page         |   Assert that the main page is open
 * Head to the Login Page Web Page | Assert that the Login Page is open
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
      TestData.mainPage.indexLink['Form Authentication']
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
      TestData.mainPage.indexLink['Form Authentication']
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
      TestData.mainPage.indexLink['Form Authentication']
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
 * Head to the Dynamic Controls Web Page | Assert that the Login Page is open
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
      TestData.mainPage.indexLink['Dynamic Controls']
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
      TestData.mainPage.indexLink['Dynamic Controls']
    );
    await DynamicsControls.waitForFormIsOpened();
    expect(await DynamicsControls.checkInputState()).to.be.false;
    await DynamicsControls.clickToggleInput();
    expect(await DynamicsControls.waitForEnabledInput()).to.be.true;
    await DynamicsControls.typeInputBox(TestData.toggleEnableDisable.text);
    expect(await DynamicsControls.getTextInputBox()).to.deep.equal(
      TestData.toggleEnableDisable.text,
      `Input box is not equal to ${TestData.toggleEnableDisable.text}`
    );
    await DynamicsControls.clickToggleInput();
    expect(await DynamicsControls.waitForDisabledInput()).to.be.true;
  });
});

/**
 * Hover page testing.
 *
 * Get on the main page         |   Assert that the main page is open
 * Head to the Hover Web Page | Assert that the Hover page is open
 * Select a random user to hover | Figcaption text of that user is displayed
 */
describe('Hover Page functionality', async () => {
  beforeEach(async function () {
    await browser.url(env.startUrl);
  });
  it('Hover main functionality', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(TestData.mainPage.indexLink.Hovers);
    await HoverPage.isFormOpened();
    await expect(await HoverPage.titleText()).to.be.equal(
      TestData.hovers.uniqe
    );
    let picked = await GeneratorUtils.generateNumber(1, 3);
    let index = picked + 2;
    expect(await HoverPage.checkFigcaptionDisplayed(index, true)).to.be.true; // Check if the info is not displayed first
    await HoverPage.hoverFigureImg(index);
    expect(await HoverPage.checkFigcaptionDisplayed(index)).to.be.true;
    expect(await HoverPage.figcaptionText(index)).to.equal(
      `name: user${picked}`
    );
  });
});

/**
 * Key Presses page testing.
 *
 * Get on the main page         |   Assert that the main page is open
 * Head to the Hover Web Page | Assert that the Hover page is open
 * Select a random user to hover | Figcaption text of that user is displayed
 */
describe('Key Presses functionality', async () => {
  beforeEach(async function () {
    await browser.url(env.startUrl);
  });
  it('Key Presses main functionality', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(
      TestData.mainPage.indexLink['Key Presses']
    );
    await KeyPressesPage.waitForFormIsOpened();
    expect(await KeyPressesPage.pageTitleText()).to.equal(
      TestData.keyPress.uniqe
    );
    await KeyPressesPage.sendKeyPress('Backspace');
    expect(await KeyPressesPage.getKeypressedText()).to.equal(
      'You entered: BACK_SPACE'
    );
  });
});

/**
 * Multiple windows page testing.
 *
 * Get on the main page         |   Assert that the main page is open
 * Head to the Multiple Windows | Assert that the Multiple windows page is open
 * Click to open the new window | Assert that the new window is open
 * Close the new window | Assert that the browse switched to Multiple windows page.
 */
describe('Multiple windows Functionality', async () => {
  beforeEach(async function () {
    await browser.url(env.startUrl);
  });
  it('Multiple windows functionality testing', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(
      TestData.mainPage.indexLink['Multiple Windows']
    );
    await MultipleWindows.waitForFormIsOpened();
    expect(await MultipleWindows.getPageTitleText()).to.equal(
      TestData.multipleWindows.uniqe
    );
    await MultipleWindows.clickNewWindowLink();
    await browser.waitToSwitchWindow(TestData.newWindow.url, 1000);
    await NewWindow.waitForFormIsOpened();
    expect(await NewWindow.getPageTitleText()).to.equal(
      TestData.newWindow.uniqe
    );
    await browser.closeWindow();
    await browser.switchWindow(TestData.multipleWindows.url);
    expect(await MultipleWindows.getPageTitleText()).to.equal(
      TestData.multipleWindows.uniqe
    );
  });
});

/**
 * Wysiwyg Editor Iframe testing.
 *
 * Get on the main page         |   Assert that the main page is open
 * Head to the WYSIWYG Editor Web Page | Assert that the WYSIWYG Editor page is open
 * Switch to inner iframe | Asert that the target is the iframe
 * Change the text in the iframe | Assert that the text equals TestData test text
 */
describe('WYSIWYG Editor Functionality', async () => {
  beforeEach(async function () {
    await browser.url(env.startUrl);
  });
  it('WYSIWYG Editor - Iframe testing', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(
      TestData.mainPage.indexLink['WYSIWYG Editor']
    );
    await WyswingEditor.waitForFormIsOpened();
    expect(await WyswingEditor.getPageTitleText()).to.equal(
      TestData.wyswingEditor.uniqe
    );
    await browser.switchToFrame(await $(TestData.wyswingEditor.iframe.id));
    await WyswingEditorIframe.waitForFormIsOpened();
    await WyswingEditorIframe.changeBodyText(
      TestData.wyswingEditor.iframe.testText
    );
    expect(await WyswingEditorIframe.getBodyText()).to.equal(
      TestData.wyswingEditor.iframe.testText
    );
  });
});

/**
 * Drag and drop functional testing.
 * 
 * Testing the functionality of drag and drop depends on the implementation of the feature in the browser
 * Resulting in a failing test on the web site of https://the-internet.herokuapp.com
 * Additionally the implementation in webdriverIO is heavily bugged
 * https://github.com/webdriverio/webdriverio/issues/8022
 * The "newsest" reported issue that has a lot threads opened.
 * 
 * Because of that reason the drag and drop functionality will be ommited for the time being.
 */


/**
 * Dropdown selection testing.
 * 
 * Get on the main page           |   Assert that the main page is open
 * Head to the Dropdown Web Page  | Assert that the dropdown page is open
 * Select option 1 in the dropdown | Asert that the dropdown 1 is selected
 * Select option 2 in the dropdown | Asert that the dropdown 2 is selected
 * 
 */

describe('Dropdowns functionality testing', async () => {
  beforeEach(async function (){
    await browser.url(env.startUrl);
  })
  it('Dropdown Testing - Selecting option one and then two', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(TestData.mainPage.indexLink.Dropdown);
    await Dropdown.waitForFormIsOpened();
    expect(await Dropdown.getPageTitleText()).to.equal(TestData.dropdown.uniqe);
    await Dropdown.selectFromDropdown('value', 1);
    expect(await Dropdown.IsOptionOneSelected()).to.be.true;
    await Dropdown.selectFromDropdown('value', 2);
    expect(await Dropdown.IsOptionTwoSelected()).to.be.true;
  })
});

/**
 * Javascript alerts testing.
 * 
 * Get on the main page           |   Assert that the main page is open
 * Head to the Javascript Alerts Web Page  | Assert that the Javascript Alerts page is open
 * Select First alert   | Assert that the first alert text is correct
 * Select the second alert and accept it | Assert that the alert was accepted
 * Select the second alert and dismiss it | Assert that the alret was dismissed
 * Select the third alert and send TestData.['Javascript Alerts'].secret | Assert that the send value is equal 
 * 
 */

describe('Javascript Alerts functionality testing', async () => {
  beforeEach(async function (){
    await browser.url(env.startUrl);
  })
  it('Javascript alerts functional test', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(TestData.mainPage.indexLink['JavaScript Alerts']);
    await JavascriptAlerts.waitForFormIsOpened();
    expect(await JavascriptAlerts.getPageTitleText()).to.equal(TestData['javascript alerts'].uniqe);
    await JavascriptAlerts.clickAlertButton(TestData['javascript alerts'].firstAlert.index);
    expect(await browser.getAlertText()).to.equal(TestData['javascript alerts'].firstAlert.alertText);
    await browser.acceptAlert();
    expect(await JavascriptAlerts.getResultText()).to.equal(TestData['javascript alerts'].dismissed);
    await JavascriptAlerts.clickAlertButton(TestData['javascript alerts'].secondAlert.index);
    await browser.acceptAlert();
    expect(await JavascriptAlerts.getResultText()).to.equal(TestData['javascript alerts'].accept);
    await JavascriptAlerts.clickAlertButton(TestData['javascript alerts'].secondAlert.index);
    await browser.dismissAlert();
    expect(await JavascriptAlerts.getResultText()).to.equal(TestData['javascript alerts'].decline);
    await JavascriptAlerts.clickAlertButton(TestData['javascript alerts'].thirdAlert.index);
    let sendToAlert = TestData['javascript alerts'].thirdAlert.sendText;
    await browser.sendAlertText(sendToAlert);
    await browser.acceptAlert();
    expect(await JavascriptAlerts.getResultText()).to.equal(`${TestData['javascript alerts'].thirdAlert.result}${sendToAlert}`);
  })
});

/**
 * Add and Remove Elements testiong.
 * 
 * Get on the main page           |   Assert that the main page is open
 * Head to the Add/Remove Elements Web Page  | Assert that the Add/Remove Elements page is open
 * Add an element | Assert that an element has been created
 * OR
 * Create a random amount of elements between 1 and 10 | Assert those has been created
 * Remove the element/s | Asser that the element/s is/are deleted
 * 
 * 
 */

describe('Add/Remove Elements functional testing', async () => {
  beforeEach(async function (){
    await browser.url(env.startUrl);
  })
  it('Add/Remove functional test', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(TestData.mainPage.indexLink['Add/Remove Elements']);
    await AddRemoveElements.waitForFormIsOpened();
    expect(await AddRemoveElements.getPageTitleText()).to.equal(TestData['Add/Remove Elements'].uniqe);
    await AddRemoveElements.clickAddElementButton();
    expect(await AddRemoveElements.isRemoveButtonDisplayed(1)).to.be.true;
    await AddRemoveElements.clickRemoveButton(1);
    expect(await AddRemoveElements.isRemoveButtonDisplayed(1, true)).to.be.true;
  })
  it('Add/Remove multiple functional test', async () => {
    await MainPage.waitForFormIsOpened();
    await MainPage.clickSpecificLink(TestData.mainPage.indexLink['Add/Remove Elements']);
    await AddRemoveElements.waitForFormIsOpened();
    expect(await AddRemoveElements.getPageTitleText()).to.equal(TestData['Add/Remove Elements'].uniqe);
    await createMultipleAddRemoveElements.createDeleteMultiple();
  });
})