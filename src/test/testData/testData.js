const { ENVIRONMENT } = require('../../environment/envConfig');
const env = require(`../../environment/${ENVIRONMENT}Environment`);

module.exports = {
  mainPage: {
    url: env.startUrl,
    indexLink: {
      'A/B Testing': 1,
      'Add/Remove Elements': 2,
      'Basic Auth (user and pass: admin)': 3,
      'Broken Images': 4,
      'Challenging DOM': 5,
      Checkboxes: 6,
      'Context Menu': 7,
      'Digest Authentication (user and pass: admin)': 8,
      'Disappearing Elements': 9,
      'Drag and Drop': 10,
      Dropdown: 11,
      'Dynamic Content': 12,
      'Dynamic Controls': 13,
      'Dynamic Loading': 14,
      'Entry Ad': 15,
      'Exit Intent': 16,
      'File Download': 17,
      'File Upload': 18,
      'Floating Menu': 19,
      'Forgot Password': 20,
      'Form Authentication': 21,
      Frames: 22,
      Geolocation: 23,
      'Horizontal Slider': 24,
      Hovers: 25,
      'Infinite Scroll': 26,
      Inputs: 27,
      'JQuery UI Menus': 28,
      'JavaScript Alerts': 29,
      'JavaScript onload event error': 30,
      'Key Presses': 31,
      'Large & Deep DOM': 32,
      'Multiple Windows': 33,
      'Nested Frames': 34,
      'Notification Messages': 35,
      'Redirect Link': 36,
      'Secure File Download': 37,
      'Shadow DOM': 38,
      'Shifting Content': 39,
      'Slow Resources': 40,
      'Sortable Data Tables': 41,
      'Status Codes': 42,
      Typos: 43,
      'WYSIWYG Editor': 44,
    },
  },
  toggleEnableDisable: {
    text: 'Something',
  },
  hovers: {
    uniqe: 'Hovers',
  },
  keyPress: {
    uniqe: 'Key Presses',
  },
  multipleWindows: {
    uniqe: `Opening a new window`,
    url: `${env.startUrl}/windows`,
  },
  newWindow: {
    uniqe: `New Window`,
    url: `${env.startUrl}/windows/new`,
  },
  wyswingEditor: {
    uniqe: `An iFrame containing the TinyMCE WYSIWYG Editor`,
    iframe: {
      id: `#mce_0_ifr`,
      testText: `Testing`,
    },
  },
  dropdown: {
    uniqe: 'Dropdown List',
  },
  'javascript alerts': {
    uniqe: 'JavaScript Alerts',
    firstAlert: {
      index: 1,
      alertText: 'I am a JS Alert',
    },
    dismissed: 'You successfully clicked an alert',
    accept: 'You clicked: Ok',
    decline: 'You clicked: Cancel',
    secondAlert: {
      index: 2,
    },
    thirdAlert: {
      index: 3,
      sendText: 'Secret',
      result: 'You entered: ',
    }
  },
  'Add/Remove Elements': {
    uniqe: 'Add/Remove Elements',
  }
};
