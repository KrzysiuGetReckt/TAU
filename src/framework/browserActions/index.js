const Logger = require('../logger');
const timeouts = require('../../environment/timeouts');

/**
 * Overriding commands from WebdriverIO
 * Just so they get Logger functionality.
 */

module.exports = async function () {
  await browser.overwriteCommand('url', async (origFunction, url) => {
    Logger.info(`Open url "${url}"`);
    await origFunction(url);
  });

  await browser.overwriteCommand('reloadSession', async (origFunction) => {
    Logger.info('Reload browser session');
    await origFunction();
  });

  await browser.overwriteCommand('refresh', async (origFunction) => {
    Logger.info('Refresh the current page');
    await origFunction();
  });

  await browser.overwriteCommand('keys', async (origFunction, keys) => {
    Logger.info(`Sending keys "${keys}" to active element`);
    await origFunction(keys);
  });

  await browser.overwriteCommand(
    'switchWindow',
    async (origFunction, matcher) => {
      Logger.info(`Switching window to "${matcher}"`);
      await origFunction(matcher);
    }
  );

  await browser.addCommand('getCurrentUrl', function () {
    Logger.info('Get current url');
    return this.getUrl();
  });

  await browser.addCommand(
    'waitToSwitchWindow',
    async function (matcher, implicitWait) {
      Logger.info(`Waiting ${implicitWait} ms`);
      await browser.pause(implicitWait);
      return this.switchWindow(matcher);
    }
  );
};
