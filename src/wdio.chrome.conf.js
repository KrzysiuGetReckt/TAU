const { config } = require('./wdio.conf');

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          args: ['--incognito', '--no-sandbox', '--disable-dev-shm-usage'],
        },
      },
    ],
    services: ['chromedriver'],
  },
};
