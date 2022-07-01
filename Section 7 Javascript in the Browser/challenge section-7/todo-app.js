// const ps = document.querySelectorAll("p");

// ps.forEach(function (p) {
//   if (p.textContent.includes("the")) {
//     p.remove();
//   }
// });

// const todos = [{
//     text: 'Order cat food',
//     completed: false
// }, {
//     text: 'Clean kitchen',
//     completed: true
// }, {
//     text: 'Buy food',
//     completed: true
// }, {
//     text: 'Do work',
//     completed: false
// }, {
//     text: 'Exercise',
//     completed: true
// }]

// const filters = {
//     searchText: '',
//     hideCompleted: false
// }

// const renderTodos = function (todos, filters) {
//     const filteredTodos = todos.filter(function (todo) {
//         const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//         const hideCompletedMatch = !filters.hideCompleted || !todo.completed

//         return searchTextMatch && hideCompletedMatch
//     })

//     const incompleteTodos = filteredTodos.filter(function (todo) {
//         return !todo.completed
//     })

//     document.querySelector('#todos').innerHTML = ''

//     const summary = document.createElement('h2')
//     summary.textContent = `You have ${incompleteTodos.length} todos left`
//     document.querySelector('#todos').appendChild(summary)

//     filteredTodos.forEach(function (todo) {
//         const p = document.createElement('p')
//         p.textContent = todo.text
//         document.querySelector('#todos').appendChild(p)
//     })
// }

// renderTodos(todos, filters)

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value
//     renderTodos(todos, filters)
// })

// document.querySelector('#new-todo').addEventListener('submit', function (e) {
//     e.preventDefault()
//     todos.push({
//         text: e.target.elements.text.value,
//         completed: false
//     })
//     renderTodos(todos, filters)
//     e.target.elements.text.value = ''
// })

// document.querySelector('#hide-completed').addEventListener('change', function (e) {
//     filters.hideCompleted = e.target.checked
//     renderTodos(todos, filters)
// })

// // 1. Create a checkbox and setup event listener -> "Hide completed"
// // 2. Create new hideCompleted filter (default false)
// // 3. Update hideCompleted an rerender list on checkbox change
// // 4. Setup renderTodos to remove completed items

const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean kitchen",
    completed: true,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

const filters = {
  searchText: "",
  hideCompleted: false,
};

const renderTodos = function (todos, filters) {
  let filterTodo = todos.filter(function (todo) {
    const SearchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return SearchTextMatch && hideCompletedMatch;
  });

  const inCompleteTodos = filterTodo.filter(function (todo) {
    return !todo.completed;
  });

  /////////

  document.querySelector("#todo").innerHTML = "";

  const todoFalse = document.createElement("h2");
  todoFalse.textContent = `You have ${inCompleteTodos.length} todos left`;
  document.querySelector("#todo").appendChild(todoFalse);

  filterTodo.forEach(function (todo) {
    const newTodo = document.createElement("p");
    newTodo.textContent = `${todo.text}`;
    document.querySelector("#todo").appendChild(newTodo);
  });
};
renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault();

  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  });

  renderTodos(todos, filters);
  e.target.elements.newTodo.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    console.log(e.target.checked);
    filters.hideCompleted = e.target.checked;

    renderTodos(todos, filters);
  });
