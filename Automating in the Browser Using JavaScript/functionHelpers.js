/* 
This is a list of functions used on: https://todomvc.com/examples/vanillajs/#/
to automate some processes while using the webbrowser for testing purposes.
*/

/**
 * Clicks a specific item in the browser
 * @param {string} item - the item to be clicked
 */

function clickItem(item) {
  item.click();
}

/**
 * Toggles the state of the todo-list from compleated to uncompleated on all items.
 */

function toggleAll() {
  document.querySelector('.toggle-all').click();
}

/**
 * Toggles a specific item on the list.
 * @param {int} number - The list item number
 */

function toggleSpecific(number) {
  let item = document.querySelectorAll('.toggle');
  if (number > item.length - 1) {
    console.log(`There is no item ${number}`);
  } else {
    item[number].click();
  }
}

/**
 * Deletes a specific item on the list. The list is ordered from 1 not 0.
 * @param {int} number - The list item number
 */

function deleteSpecific(number) {
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
function clearCompleated() {
  if (
    document.querySelector(
      `button.clear-completed:not([style*='display']), button.clear-completed:not([style*='none'])`
    ) === null // checking if the button is displayd or exists on the site
  ) {
    console.log(`There are no compleated todos`);
  } else {
    document.querySelector(`button.clear-completed`).click();
  }
}

/**
 * Creates a new todo of string text
 * @param {string} text - The text of the new todo
 */

function createTodo(text) {
  document.querySelector(`input.new-todo`).value = text;
  document
    .querySelector(`input.new-todo`)
    .dispatchEvent(new Event('change', { bubbles: true }));
}

/**
 * A set of filtering toggle options
 */

function filterCompleated() {
  location.hash = '/completed';
}

function filterActive() {
  location.hash = '/active';
}

function filterAll() {
  location.hash = '/';
}

/**
 * Deletes a specific item on the list. The list is ordered from 1 not 0.
 * @param {int} number - The list item number
 * @param {string} text - The text to change to.
 */

function changeTodo(number, text) {
  let item = document.querySelectorAll('.toggle');
  if (number > item.length) {
    console.log(`There is no item ${number}`);
  } else {
    document
      .querySelector(`ul.todo-list > li:nth-child(${number}) > div > label`)
      .dispatchEvent(new Event('dblclick', { bubbles: true }));
    document.querySelector(
      `ul.todo-list > li:nth-child(${number}) .edit`
    ).value = text;
    document
      .querySelector(`ul.todo-list > li:nth-child(${number}) .edit`)
      .dispatchEvent(new Event('blur'));
  }
}
