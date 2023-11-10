module.exports = {
  TIMEOUT: 100,
  INTERVAL: 100,
};

/* 
    Those are the values used in the console to import them.
    const TIMEOUT = 100;
    const INTERVAL = 100;
*/

/* 
    This file should be the configuration file for any timeouts, intervals etc. 
    The main premise is for the ability to change those values without going back here to hard code the ms values.
    For example while using jenkins to automate the execution of a daily test 
    so the user could easily change the timeout and internal values.
*/
