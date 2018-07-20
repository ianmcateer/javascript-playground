const todos = [{
  text: 'order cat food',
  completed: false
}, {
  text: "clean kitchen",
  completed: false
}]

deleteTodos = (todos, query) => {
  // find the todo
  const todoIndex = todos.findIndex((todo, index) => {
    return todo.text === query
  })
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1)
    }
  
}
deleteTodos(todos, 'order cat food')
console.log(todos)