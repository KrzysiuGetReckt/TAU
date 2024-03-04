const credentials = require("../../../environment/credentials");
const { setDeleteCookies, DELETECOOKIES } = require("../../../environment/envConfig");
const GeneratorUtils = require("../../../framework/Utils/generatorUtils");
const Logger = require("../../../framework/logger");
const { LoginPage } = require("../../../pageObjects/index");

const SignIn = async (valid, email) => {
    if(valid){
        const foundCredentials = await credentials.find(creds => creds.email === email);
        if (foundCredentials) {
            const pswd = foundCredentials.PASSWORD;
            await LoginPage.createAccount(email, pswd);
            await setDeleteCookies(true);
        } else {
            // Handle the case where no matching credentials are found
            await Logger.error(`No credentials found for email: ${email}`);
            // You might want to throw an error, log a message, or handle it in another way.
        }
    } else {
        const pswd = await GeneratorUtils.generateString(10);
        await LoginPage.createAccount(email, pswd);
    }
}

module.exports = SignIn;