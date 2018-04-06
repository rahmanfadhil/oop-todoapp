class Todo {
  constructor(name, time){
    this.text = name
    this.time = time
  }

  editTodo(name, time){
    this.text = name
    this.time = time
  }
}

class TodoList {
  constructor(todos){
    this.todos = todos || []
  }

  // Method for add todo
  addTodo(todo){
    this.todos.push(todo)
  }

  // Method for delete todo
  deleteTodo(index){
    this.todos.splice(index, 1)
  }

  // Method for clear all todo
  clearTodo(index){
    this.todos = []
  }

  // Method for find todo
  findOne(index){
    return this.todos[index]
  }

  // Method for find all todo
  findAll(){
    return this.todos
  }
}
