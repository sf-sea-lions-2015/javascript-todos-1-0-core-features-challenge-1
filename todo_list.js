var newTodoList = function() {

  var todoList = {}

  todoList.tasks = []

  todoList.add = function(task){
    this.tasks.push(task)
  }

  todoList.remove = function(index){
    delete this.tasks[index]
  }

  todoList.list = function(){
    for(var i in this.tasks){
      console.log(this.tasks[i])
    }
  }

  todoList.complete = function(index){
    this.tasks[index] += 'COMPLETE'
  }
  return todoList;
  // ???
};





// Driver code


var groceryList1 = newTodoList();
groceryList1.add('bread');
groceryList1.add('cheese');
groceryList1.add('milk');
// groceryList1.list(); //-> ['bread', 'cheese', 'milk']
// debugger

groceryList1.tasks.indexOf('cheese'); //-> 1
groceryList1.remove(1);
// groceryList1.list(); //-> ['bread', 'milk']

// release 2
var groceryList2 = newTodoList();
groceryList2.add('bread');
groceryList2.add('cheese');
groceryList2.add('milk');
groceryList2.add('yogurt');
// groceryList2.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: false},
// {description: 'milk', completed: false},
// ];
groceryList2.tasks.indexOf('cheese'); //-> 1
// groceryList2.get(1); //-> {description: 'cheese', completed: false}
groceryList2.complete(1);
groceryList2.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'cheese', completed: true},
// {description: 'milk', completed: false},
// ];
groceryList2.remove(1);
groceryList2.list(); //-> [
// {description: 'bread', completed: false},
// {description: 'milk', completed: false},
// ];
