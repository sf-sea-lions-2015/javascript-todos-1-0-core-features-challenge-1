// Release 1
// var createTodoList = function() {
//   var todoList = {};

//   todoList.tasks = []

//   todoList.add = function(food){
//     todoList.tasks.push(food);
//   };

//   todoList.list = function(){
//     for(var i=0; i< todoList.tasks.length; i++) {
//       console.log(todoList.tasks[i])
//     };
//   };

//   todoList.indexOf = function(food){
//     var indexFood = todoList.tasks.indexOf(food);
//     console.log(indexFood);
//   };

//   todoList.remove = function(index){
//     todoList.tasks.splice(index,1)
//   };

//   return todoList;
// };

var createTodoList = function() {
  var todoList = {};

  todoList.tasks = []

  todoList.add = function(food){
    todoList.tasks.push({
      description: food,
      completed: false
    });
  };

  todoList.list = function(){
    for(var i=0; i< todoList.tasks.length; i++) {
      console.log(todoList.tasks[i])
    };
  };

  todoList.indexOf = function(food){
    console.log(todoList.tasks.indexOf(food));
  };

  todoList.remove = function(index){
    todoList.tasks.splice(index,1)
  };

  todoList.get = function(index){
    console.log(todoList.tasks[index]);
  };

  todoList.complete = function(index){
    todoList.tasks[index].completed = true
  };

  return todoList;
};







// Driver code


// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.tasks; //-> ['bread', 'cheese', 'milk']
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']

// release 2
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.tasks; //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ];
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
