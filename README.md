# JavaScript Todos
 
## Learning Competencies 

* Write a function that returns an object with todo list funtionality.
* Implement an API in plain JavaScript

## Summary 

This challenge should be done entierly in the JavaScript console within the chrome developer tools. 

This challenge is based on the ruby todos challenge in phase 1

This challenge is designed to introduce you to JavaScript the language before we introduce features of the web browser.


## How you should work

0. Open the HTML file in this repo in chrome
0. Open the chrome developer tools
0. Go to the sources tab and open the console
0. Write code in the js file in this repo
0. Reload the page to run your code
0. rinse and repeat.


### Release 1

Impliment the following API:

```js
var groceryList = createTodoList();

// the add function adds the given string to the todo list;
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// the tasks property should be an array of the tasks
groceryList.tasks //-> ['bread', 'cheese', 'milk']

// the list function should console.log() each task.
groceryList.list(); 
//> bread
//> cheese
//> milk

// the indexOf function should search your tasks for the
// given task and return the index, if found. else return -1
// you can think of the index as the task ID (for now)
groceryList.indexOf('cheese'); //-> 1

// the remove function should take an index and remove the
// task corrisponding to that index
groceryList.remove(1);

// the above remove should remove the 'cheese' task
groceryList.list();
//> bread
//> milk

```


### Release 2

Release 2 adds the ability to complete tasks. In order to do that we're going to start storing each task as an object instead of just a string.

```js
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');


// the tasks property should be an array of the tasks
// Note how each task is now an object with description and completed properties.
groceryList.tasks //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ]

groceryList.list(); //-> 
//> {description: 'bread', completed: false} 
//> {description: 'cheese', completed: false}
//> {description: 'milk', completed: false}

groceryList.indexOf('cheese'); //-> 1

// we now need a new 'get' function that takes the index
// and returns the corrisponding task object
groceryList.get(1); //-> {description: 'cheese', completed: false}

// remove should still work
groceryList.remove(1);
groceryList.list(); //->
//> {description: 'bread', completed: false}
//> {description: 'milk', completed: false}

// complete should mark the task as completed
groceryList.complete(0);
groceryList.list(); //-> [
// {description: 'bread', completed: true}, 
// {description: 'milk', completed: false}, 
// ];
```
