const Logger = require('../logger');

module.exports = class WebUtils {

    static async dragAndDrop (from, to) {
        return browser
          .action('pointer')
          .move({ duration: 0, origin: from, x: 0, y: 0 })
          .down({ button: 0 })
          .move({ duration: 0, origin: 'pointer', x: 0, y: 0 })
          .pause(10)
          .move({ duration: 0, origin: to, x: 0, y: 0 })
          .move({ duration: 0, origin: 'pointer', x: 1, y: 0 })
          .move({ duration: 0, origin: 'pointer', x: -1, y: 0 })
          .up({ button: 0 })
          .perform();
      };
}