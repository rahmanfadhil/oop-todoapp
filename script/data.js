class Todo {
  constructor(name, time){
    this.text = name
    this.time = time
    this.bookmark = false
  }

  editTodo(name, time){
    this.text = name
    this.time = time
  }

  bookmarkTodo(){
    this.bookmark = true
  }
  
  unBookmarkTodo(){
    this.bookmark = false
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
