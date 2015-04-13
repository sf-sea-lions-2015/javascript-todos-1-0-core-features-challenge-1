var createTodoList = function() {
  var todoList = {};

  todoList.tasks = [];

  var task = function(item) {
    return {
      description: item,
      completed: false,
    };
  };

  todoList.add = function(item){
    this.tasks.push(task(item));
  };

  todoList.remove = function(index){
    delete this.tasks[index];
  };

  todoList.list = function() {
    for(var i in this.tasks) {
      console.log(this.tasks[i]);
    };
  };

  todoList.indexOf = function(item){
    for(var i in this.tasks){
      if (this.tasks[i].description == item) console.log(i)
    };
  };

  todoList.get = function(index) {
    console.log(this.tasks[index])
  };

  todoList.complete = function(index) {
    this.tasks[index].completed = true
  };

  return todoList;
};






// Driver code


// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']

// release 2
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ];
groceryList.indexOf('cheese'); //-> 1
groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: true},
// {description: 'milk', completed: false},
// ];
groceryList.remove(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
