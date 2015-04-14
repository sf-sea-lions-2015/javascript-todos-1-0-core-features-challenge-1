//RELEASE 1

// var createTodoList = function() {

//   // todoList.tasks = []

//   // todoList.add = funtion(item) {

//   // }

//     var todoList = {

//     tasks: [],

//     add: function(item){
//       this.tasks.push(item)
//     },

//     list: function(){
//       for (var i = 0; i < this.tasks.length; i++){
//         console.log(this.tasks[i])
//       }
//     },

//     indexOf: function(item){
//       for (var i = 0; i < this.tasks.length; i++){
//         if (this.tasks[i] === item) return i
//       }
//     },

//     remove: function(index){
//       // for (var i = 0; i < this.tasks.length; i++){
//       //   if (this.tasks[i] === this.tasks[index])
//           this.tasks.splice(index, 1)
//       }
//     }

// };

// return todoList;
// };


// RELEASE 2

var createTodoList = function() {

    var todoList = {}
    var tasks = []

    todoList.add = function(item){
      tasks.push({
        description: item,
        complete: false
      })
    }

    todoList.list = function(){
      for (var i = 0; i < tasks.length; i++){
         console.log(tasks[i])
      }
    }

    todoList.indexOf = function(item){
      for (var i = 0; i < tasks.length; i++){
        if (tasks[i] === item) return i
      }
    }

    todoList.remove = function(index){
      tasks.splice(index, 1)
      }

    todoList.get = function(index){
      console.log(tasks[index])

    }

    todoList.complete = function(index){
      tasks[index].complete = true
    }


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
