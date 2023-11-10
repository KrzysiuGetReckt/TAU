# TAU - Automating in the Browser Using JavaScript

This set of exercises is meant to set up the fundamentals of Automation testing while using a [TODO](https://todomvc.com/examples/vanillajs/) web application. Most of the structure of the files and the choice of using classes rather then methods is made from the A1QA Intership

## The power of the console.

All of the automation of this set of exercises was done only using the console in the web browser using the DEV tools (f12) > console.

The changes done by the classes are done in the local storage of the browser, and most of the automation scripts are temporarly stored in the console.

## Instalation in the console

To run tests, run the following set of code in the console.

- This set of code is from "randomUtils.js".

```javascript
class RandomUtils {
  static getRandomInt(x) {
    return Math.floor(Math.random() * x);
  }
}
```

- This set of code is from "timeoutENC.js"

```javascript
const TIMEOUT = 100;
const INTERVAL = 100;
```

This set of code sets up the initial timeout and interval values in ms.

- This set of code is from "TodoUtils.js"

Note that the set of code needed to be imported is the "TodoUtils" class.

```javascript
class TodoUtils {
static clickItem(item) {
    item.click();
}
.
.
.
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
```

- This set of code is from "todoAutomation.js"

Note that the set of code needed to be imported is the "TodoAutomation" class.

```javascript
class TodoAutomation {
static getRandomItemIndex() {
    let amount = document.querySelectorAll('ul.todo-list li').length;
    if (amount == 0) {
      console.log(`No items. ${amount}`);
      return 0;
    }
    return RandomUtils.getRandomInt(amount) + 1;
  }
.
.
.
static stopAutomation() {
    clearInterval(this.botTodo);
  }
};
```
