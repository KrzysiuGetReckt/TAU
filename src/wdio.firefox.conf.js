const { config } = require('./wdio.conf');

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        maxInstances: 3,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: ['-incognito', '-no-sandbox', '-disable-dev-shm-usage'],
        },
      },
    ],
    services: ['geckodriver'],
  },
};
