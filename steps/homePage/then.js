const { Then } = require('@wdio/cucumber-framework');
const verifyLinkContain = require('../../support/actions/verifyLinkContain');

Then(/^Links related to "(.*)" are shown on the results page$/, async (keyword)=> {
   await verifyLinkContain(keyword);
})