module.export = class RandomUtils {
  /**
   * Get a random number between 0 and x
   * @param {int} x - The maximum of the range.
   * @returns {int} - The random number
   */
  static getRandomInt(x) {
    return Math.floor(Math.random() * x);
  }
};
