/**
 * Navigate to a url
 * 
 * @param {String} websiteUrl url to load
 */

const goToUrl = async (websiteUrl) => {
    if (typeof websiteUrl !== 'string') {
        throw new Error('Parameter for "url" command needs to be of type string');
    }
    return browser.url(websiteUrl);
};

module.exports = goToUrl;