const timeoutENV = require('./timeoutENV'); //It's unnecessary but should be used when interacting through webdriver IO / selenium
/**
 * Creating a module class that can be exported for other utility scenarios.
 * The main porpuse of this class is for interaction with the TODO web page
 * https://todomvc.com/examples/vanillajs/#/
 */

module.export = class TodoUtils {
  /* 
    This is a list of functions used on: https://todomvc.com/examples/vanillajs/#/
    to automate some processes while using the webbrowser for testing purposes.
  */

  /**
   * Clicks a specific item in the browser
   * @param {string} item - the item to be clicked
   */

  static clickItem(item) {
    item.click();
  }

  /**
   * Toggles the state of the todo-list from compleated to uncompleated on all items.
   */

  static toggleAll() {
    console.log('Toggle all');
    document.querySelector('.toggle-all').click();
  }

  /**
   * Toggles a specific item on the list.
   * @param {int} number - The list item number
   */

  static toggleSpecific(number) {
    if (number > document.querySelectorAll(`.todo-list > li`).length) {
      console.log(`There is no item ${number}`);
    } else {
      console.log(`Toggle todo ${number}`);
      document
        .querySelector(`.todo-list > li:nth-child(${number}) input`)
        .click();
    }
  }

  /**
   * Deletes a specific item on the list. The list is ordered from 1 not 0.
   * @param {int} number - The list item number
   */

  static deleteSpecific(number) {
    let item = document.querySelectorAll('.toggle');
    if (number > item.length) {
      console.log(`There is no item ${number}`);
    } else {
      document
        .querySelector(`ul.todo-list > li:nth-child(${number}) button.destroy`)
        .click();
    }
  }

  /**
   * Clears the compleated todos
   */
  static clearCompleated() {
    if (
      document.querySelector(
        `button.clear-completed:not([style*='display']), button.clear-completed:not([style*='none'])`
      ) === null // checking if the button is displayd or exists on the site
    ) {
      console.log(`There are no compleated todos`);
    } else {
      console.log('Clearing compleated.');
      document.querySelector(`button.clear-completed`).click();
    }
  }

  /**
   * Creates a new todo of string text
   * @param {string} text - The text of the new todo
   */

  static createTodo(text) {
    document.querySelector(`input.new-todo`).value = text;
    document
      .querySelector(`input.new-todo`)
      .dispatchEvent(new Event('change', { bubbles: true }));
  }

  /**
   * A set of filtering toggle options
   */

  static filterCompleated() {
    console.log('Filter compleated');
    location.hash = '/completed';
  }

  static filterActive() {
    console.log('Filter Active');
    location.hash = '/active';
  }

  static filterAll() {
    console.log('Filter All');
    location.hash = '/';
  }

  /**
   * Deletes a specific item on the list. The list is ordered from 1 not 0.
   * @param {int} position - The list item number
   * @param {string} text - The text to change to.
   */

  static changeTodo(position, text) {
    let item = document.querySelectorAll('.toggle');
    if (position > item.length) {
      console.log(`There is no item ${position}`);
    } else {
      document
        .querySelector(`ul.todo-list > li:nth-child(${position}) > div > label`)
        .dispatchEvent(new Event('dblclick', { bubbles: true }));
      document.querySelector(
        `ul.todo-list > li:nth-child(${position}) .edit`
      ).value = text;
      document
        .querySelector(`ul.todo-list > li:nth-child(${position}) .edit`)
        .dispatchEvent(new Event('blur'));
    }
  }

  /**
   * Creates todo on a basis of 1 second using settimout
   * @param {int} amount - The amount of todos to create
   * @param {string} startText - The starting text of the todo
   */

  static createAutoTodo(amount, startText) {
    for (let i = 0; i < amount; i++) {
      setTimeout(() => {
        this.createTodo(startText + ' ' + i);
      }, TIMEOUT * i);
    }
  }

  /**
   * Creates todo on a basis of 1 second while using setInterval
   * @param {int} amount - The amount of todos to create
   * @param {string} startText - The starting text of the todo
   */

  static createAutoTodoInterval(amount, startText) {
    let i = 0;
    let start = setInterval(() => {
      this.createTodo(startText + ' ' + i);
      if (++i == amount) {
        clearInterval(start);
      }
    }, INTERVAL);
  }
};
