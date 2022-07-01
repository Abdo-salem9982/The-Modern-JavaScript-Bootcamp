///////   Todos  Challenge /////////

// const todos = [
//   "Order cat food",
//   "Clean kitchen",
//   "Buy food",
//   "Do work",
//   "Exercise",
// ];

// console.log(`You have ${todos.length} todos`);

// console.log(`Todo: ${todos[todos.length - 2]}`);

///////////////////////////////////////

///////   Todos 2nd  Challenge /////////

// const todos = [
//   "Order cat food",
//   "Clean kitchen",
//   "Buy food",
//   "Do work",
//   "Exercise",
// ];

// // Delete 3rd item
// todos.splice(2, 1);
// // Add item into the end
// todos.push("Buy coffee");
// // Delete the 1st item
// todos.shift();

// console.log(todos);

// ///////////////////////////////////////

///////   ForEach  Challenge /////////

// const todos = [
//   "Order cat food",
//   "Clean kitchen",
//   "Buy food",
//   "Do work",
//   "Exercise",
// ];

// // Delete 3rd item
// todos.splice(2, 1);
// // Add item into the end
// todos.push("Buy coffee");
// // Delete the 1st item
// todos.shift();

// todos.forEach(function (todo, index) {
//   console.log(`${index + 1}. ${todo} `);
// });

// ///////////////////////////////////////

///////   For Loop Challenge /////////

// const todos = [
//   "Order cat food",
//   "Clean kitchen",
//   "Buy food",
//   "Do work",
//   "Exercise",
// ];

// // Delete 3rd item
// todos.splice(2, 1);
// // Add item into the end
// todos.push("Buy coffee");
// // Delete the 1st item
// todos.shift();

// for (let count = 0; count < todos.length; count++) {
//   console.log(`${count + 1}. ${todos[count]}`);
// }

// ///////////////////////////////////////

///////   Searching in Array Challenge /////////

// const todos = [
//   {
//     text: "Order cat food",
//     completed: false,
//   },
//   {
//     text: "Clean kitchen",
//     completed: true,
//   },
//   {
//     text: "Buy food",
//     completed: true,
//   },
//   {
//     text: "Do work",
//     completed: false,
//   },
//   {
//     text: "Exercise",
//     completed: true,
//   },
// ];

// const removeTodo = function (todos, text) {
//   const index = todos.findIndex(function (todo) {
//     return todo.text.toLowerCase() === text.toLowerCase();
//   });
//   if (index > -1) {
//     todos.splice(index, 1);
//   }
// };
// removeTodo(todos, "buy food");
// console.log(todos);

// ///////////////////////////////////////

///////   Filtring in Array Challenge /////////

// const todos = [
//   {
//     text: "Order cat food",
//     completed: false,
//   },
//   {
//     text: "Clean kitchen",
//     completed: true,
//   },
//   {
//     text: "Buy food",
//     completed: true,
//   },
//   {
//     text: "Do work",
//     completed: false,
//   },
//   {
//     text: "Exercise",
//     completed: true,
//   },
// ];

// const getThingsToDo = function (todos) {
//   return todos.filter(function (todo, index) {
//     return !todo.completed;
//   });
// };

// console.log(getThingsToDo(todos));

// ///////////////////////////////////////

///////   Sorting Array Challenge /////////

// const todos = [
//   {
//     text: "Order cat food",
//     completed: false,
//   },
//   {
//     text: "Clean kitchen",
//     completed: true,
//   },
//   {
//     text: "Buy food",
//     completed: true,
//   },
//   {
//     text: "Do work",
//     completed: false,
//   },
//   {
//     text: "Exercise",
//     completed: true,
//   },
// ];

// const sortToDos = function (todos) {
//   todos.sort(function (a, b) {
//     if (a.completed < b.completed) {
//       return -1;
//     } else if (b.completed < a.completed) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// };

// sortToDos(todos);
// console.log(todos);

// ///////////////////////////////////////
