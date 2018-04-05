var list = new TodoList();

// -----------------------------------------------------------------------------

const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const output = document.getElementById('output')

// -----------------------------------------------------------------------------

function showList(){
  output.innerHTML = ""
  list.find().map((data, index) => {
    let e = document.createElement('li')
    e.id = index
    e.innerHTML = `
      <button onclick="deleteTodo(${index})">X</button>
      <button onclick="editTodo(${index})">EDIT</button>
      ${data.text}`;
    output.appendChild(e)
  })
}

// -----------------------------------------------------------------------------

function deleteTodo(index){
  list.deleteTodo(index)
  showList()
}

function editTodo(index){
  var result = prompt("Edit todo");
  list.findOne(index).editTodo(result, new Date())
  showList()
}

// -----------------------------------------------------------------------------

addBtn.addEventListener('click', function(){
  let newTodo = new Todo(input.value, new Date());
  list.addTodo(newTodo)
  showList()
})
