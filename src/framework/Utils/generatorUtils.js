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
};
