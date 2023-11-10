let TodoUtils = require('./todoUtils');
let RandomUtils = require('./randomUtils');
const timeoutENV = require('./timeoutENV'); //It's unnecessary but should be used when interacting through webdriver IO / selenium.

module.export = class TodoAutomation {
  /**
   * Get a random number between 0 and x
   * @param {int} x - The maximum of the range.
   * @returns {int} - The random number
   */

  static getRandomItemIndex() {
    let amount = document.querySelectorAll('ul.todo-list li').length;
    if (amount == 0) {
      console.log(`No items. ${amount}`);
      return 0;
    }
    return RandomUtils.getRandomInt(amount) + 1;
  }

  /**
   * Toggles a random todo.
   */

  static toggleRandomTodo() {
    let randomIndex = this.getRandomItemIndex();
    if (randomIndex == 0) {
      console.log(`There are no Todos`);
      return 0;
    }
    console.log(`Toggeling todo ` + randomIndex);
    TodoUtils.toggleSpecific(randomIndex);
  }

  /**
   * Deletes a random todo.
   */

  static deleteRandomTodo() {
    let randomIndex = this.getRandomItemIndex();
    if (randomIndex == 0) {
      console.log(`There are no Todos`);
      return 0;
    }
    console.log(`Deleating todo ${randomIndex}`);
    TodoUtils.deleteSpecific(randomIndex);
  }

  /**
   * Creates a random todo
   */

  static createRandomTodo() {
    let randomName = Date.now();
    console.log(`Creating todo index ${randomName}`);
    TodoUtils.createTodo(`Random todo ${randomName}`);
  }

  /**
   * Changes a random todo to current time stamp.
   */

  static changeRandomTodo() {
    let randomIndex = this.getRandomItemIndex();
    if (randomIndex == 0) {
      console.log(`There are no Todos`);
      return 0;
    }
    let randomName = Date.now();
    console.log(`Changing todo ${randomIndex} name to todo ${randomName}`);
    TodoUtils.changeTodo(randomIndex, `Todo ${randomName}`);
  }

  /**
   * Automation bot using functions on a random basis to check if for user interaction bugs.
   */

  static startAutomation() {
    this.botTodo = setInterval(() => {
      let randomNumber = RandomUtils.getRandomInt(7);
      switch (randomNumber) {
        case 0:
          this.toggleRandomTodo();
          break;
        case 1:
          this.deleteRandomTodo();
          break;
        case 2:
          TodoUtils.clearCompleated();
          break;
        case 3:
          this.createRandomTodo();
          break;
        case 4:
          TodoUtils.filterCompleated();
          break;
        case 5:
          TodoUtils.filterActive();
          break;
        case 6:
          TodoUtils.filterAll();
          break;
        case 7:
          this.changeRandomTodo();
          break;
        default:
          break;
      }
    }, INTERVAL);
  }

  /**
   * Stops the Automation bot.
   */

  static stopAutomation() {
    clearInterval(this.botTodo);
  }
};
