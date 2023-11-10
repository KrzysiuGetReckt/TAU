# TAU - Automating in the Browser Using JavaScript

This set of exercises is meant to set up the fundamentals of Automation testing while using a [TODO](https://todomvc.com/examples/vanillajs/) web application. Most of the structure of the files and the choice of using classes rather then methods is made from the A1QA Intership

## The power of the console.

All of the automation of this set of exercises was done only using the console in the web browser using the DEV tools (f12) > console.

The changes done by the classes are done in the local storage of the browser, and most of the automation scripts are temporarly stored in the console.

## Instalation in the console

To run tests, run the following set of code in the console.

- This set of code is from ["randomUtils.js"](https://github.com/KrzysiuGetReckt/TAU/blob/BrowserAutomation/randomUtils.js)

```javascript
class RandomUtils {
  static getRandomInt(x) {
    return Math.floor(Math.random() * x);
  }
}
```

This class is used for the randomization between class methods in "TodoAutomation".

- This set of code is from ["timeoutENV.js"](https://github.com/KrzysiuGetReckt/TAU/blob/BrowserAutomation/timeoutENV.js)

```javascript
const TIMEOUT = 100;
const INTERVAL = 100;
```

This variables sets up the initial timeout and interval values in ms.

- This set of code is from ["TodoUtils.js"](https://github.com/KrzysiuGetReckt/TAU/blob/BrowserAutomation/todoUtils.js)

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

The TodoUtils class mainly consists off methods involving interaction with the Todo web application.

- This set of code is from ["todoAutomation.js"](https://github.com/KrzysiuGetReckt/TAU/blob/BrowserAutomation/todoAutomation.js)

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

The class "TodoAutomation" is used for automation of interaction that mimic a random behaviour of the user of the Todo web application.

## Usage - The automation

### To start the automation process type:

Note that the automation won't work without proper setup of the console.

```javascript
TodoAutomation.startAutomation();
```

![](https://github.com/KrzysiuGetReckt/TAU/blob/BrowserAutomation/media/todoautomation_startautomation.gif)

The main feature is randomly picking between multiple functions that can interact with the Todo list:

```javascript
TodoAutomation.toggleRandomTodo(); // Toggle a randomly picked todo.
TodoAutomation.deleteRandomTodo(); // Randomly pick and delete a todo.
TodoUtils.clearCompleated(); // Clear all compleated todos.
TodoAutomation.createRandomTodo(); // Create a random todo with current timestamp
TodoUtils.filterCompleated(); // Filter for currently compleated todos
TodoUtils.filterActive(); // Filter for currenctly active todos
TodoUtils.filterAll(); // Filter for all todos
TodoAutomation.changeRandomTodo(); // Update the title of a randomly picked todo.
```

### To stop the automation type:

```javascript
TodoAutomation.stopAutomation();
```
![](https://github.com/KrzysiuGetReckt/TAU/blob/BrowserAutomation/media/todoautomation_stopautomation.gif)
