const Logger = require('../logger');

module.exports = class GeneratorUtils {
  /**
   * Generating a number between the minimal value and the maximum.
   * @param {int} min the minimal value
   * @param {int} max the maximal value
   * @returns {int} the random number in the range <min, max>
   */
  static generateNumber(min, max) {
    Logger.info(`Generating random number in range min ${min} and max ${max}`);
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generating a string of random characters with a specific lenght
   * @param {int} length The lenght of the generated string
   * @returns {string} the random generated string of described Lenght
   */
  static generateString(length) {
    Logger.info(`Generating a random string of length ${length}`);
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    while (result.length < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    Logger.info(`Generated string: ${result}`);
    return result;
  }
};
