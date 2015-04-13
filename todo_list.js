//RELEASE 1
// var createTodoList = function() {
//   var todoList = {
//      tasks:[],
//      add: function(item){
//       this.tasks.push(item)
//      },
//      list: function(){
//        console.log(this.tasks);
//      },
//      indexOf: function(item){
//         return this.tasks.indexOf(item);
//      },
//      remove: function(index){
//          this.tasks.splice(index);
//      },
//      get: function(index){
//     // access the date of the array
//     // display the properties from their desired index
//       this.tasks[index].description
//      }
//   };
//   // your code here
//   return todoList;

// };


// ****************   Driver code   **********************
// Release 1

// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// groceryList.list(); //-> ['bread', 'cheese', 'milk']
// groceryList.indexOf('cheese'); //-> 1
// groceryList.remove(1);
// groceryList.list(); //-> ['bread', 'milk']




//****************  RELEASE 2  *********************

var createTodoList = function() {
  var todoList = {
     tasks:[],
     add: function(item){
      this.tasks.push({description:'item', completed:false})
     },
     list: function(){
       console.log(this.tasks);
     },
     indexOf: function(item){
        return this.tasks.indexOf(item);
     },
     remove: function(index){
         this.tasks.splice(index);
     },
     get: function(index){
      console.log(this.tasks[index]);
     },
     complete: function(index){
       this.tasks[index].completed = true;
     }
  };
  // your code here
  return todoList;
};


// ****************  release 2 DRIVER CODE ****************

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
// debugger;
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
