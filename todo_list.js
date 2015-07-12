var createTodoList = function() {

  var todoList = {

    items: [],

    add: function(foodItem) {
      this.items.push({ description:foodItem, completed: false });
    },

    list: function() {
      for ( var i = 0; i < this.items.length; i += 1 ){
        console.log(this.items[i]);
      }
    },

    indexOf: function(foodItem) {
      // console.log(this.items.indexOf(foodItem))
      for ( var i = 0; i < this.items.length; i += 1 ) {
        if(this.items[i].description === foodItem) {
          console.log(i);
        }
      }
    },

    get: function(foodIndex) {
      console.log(this.items[foodIndex])
    },

    complete: function(foodIndex) {
      this.items[foodIndex].completed = true;
    },

    remove: function(foodIndex) {
      this.items.splice(foodIndex, 1)
    }

  }

  return todoList;
};






// Driver code


// Release 1

// var groceryList = createTodoList();
// groceryList.add('bread');
// groceryList.add('cheese');
// groceryList.add('milk');
// groceryList.list(); //-> ['bread', 'cheese', 'milk']
// groceryList.indexOf('cheese'); //-> 1
// groceryList.remove(1);
// groceryList.list(); //-> ['bread', 'milk']

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
