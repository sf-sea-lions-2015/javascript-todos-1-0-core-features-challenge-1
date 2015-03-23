// // 4 ways to invoke a function in JS

// var x = function(){
//   console.log('hi');
// }

// function x(a,b,c){
//   console.log('hi');
// }

// x()

// // ---

// abc.x()

// // ---

// x.call(overrideThis, 1,2,3 )
// x.apply(overrideThis, [1,2,3])

// // ---

// new x

// // abc = {}
// // x.call(abc)


var createTodoList = function(title) {
  var todoList = {};

  todoList.tasks = [];

  todoList.add = function(task){
    this.tasks.push(task);
  };

  todoList.list = function(){
    for (var i in this.tasks){
      console.log(this.tasks[i]);
    }
  // console.log("Hello")    // loop through each task
      // console.log(task);
  };

  todoList.remove = function(task){
    // find that task
    // remove it from the tasks array
  };

  return todoList;
};




// Driver code


var groceryList = createTodoList();
groceryList.add('milk');
groceryList.add('cheese');
groceryList.add('butter');
groceryList.add('bread');
groceryList.list();

var favoriteColors = createTodoList();


// var task1 = newTask()
// task1.num = 1;
// task1.title = "Get mom flowers";
