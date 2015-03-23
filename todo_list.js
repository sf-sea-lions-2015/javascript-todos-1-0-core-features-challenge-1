var createTodoList = function() {
  var todoList = {};
  todoList.tasks = [];
  todoList.add = function(task){
    this.tasks.push(task);
  };
  todoList.complete = function(task){
    var taskPosition = this.tasks.indexOf(task);
    this.tasks[taskPosition] = "Completed " + task
  };
   todoList.remove = function(task){
    var taskPosition = this.tasks.indexOf(task);
    this.tasks.splice(taskPosition, 1);
  };
  return todoList;
}




// Driver code


var groceryList = createTodoList();
var favoriteColors = createTodoList();
