const { ENVIRONMENT } = require('../../environment/envConfig');
const env = require(`../../environment/${ENVIRONMENT}Environment`);

module.exports = {
  pageUrl: {
    mainPage: env.startUrl,
    loginPage: `${env.startUrl}?controller=authentication&back=my-account`,
  },
  catalog: {
    noListing: "No results were found for your search",
  },
};
