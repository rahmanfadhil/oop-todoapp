var list = new TodoList();

// -----------------------------------------------------------------------------

const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const clearBtn = document.getElementById('clearBtn')
const output = document.getElementById('output')
const bookmarkToggle = document.getElementById('bookmarkToggle')

// -----------------------------------------------------------------------------

function showList(){
  output.innerHTML = ""
  list.findAll().map((data, index) => {
    let e = document.createElement('li')
    if(list.findOne(index).bookmark == false){
      var bookmarkBtn = `<button onclick="bookmark(${index})">BOOKMARK</button>`
      e.id = 'notBookmark'
    } else {
      var bookmarkBtn = `<button onclick="rmBookmark(${index})">UNBOOKMARK</button>`
    }
    e.innerHTML = `
      <button onclick="deleteTodo(${index})">X</button>
      <button onclick="editTodo(${index})">EDIT</button>
      ${bookmarkBtn}
      <span>${data.text}</span>`;
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

function addTodo(){
  let newTodo = new Todo(input.value, new Date());
  list.addTodo(newTodo)
  showList()
}

function bookmark(index){
  list.findOne(index).bookmarkTodo()
  showList()
}

function rmBookmark(index){
  list.findOne(index).unBookmarkTodo()
  showList()
}

function showBookmark(){
  let notBookmarkList = document.querySelectorAll('#notBookmark')
  if(bookmarkToggle.checked){
    notBookmarkList.forEach(item => {
      item.style.display = "none"
    })
  } else {
    notBookmarkList.forEach(item => {
      item.style.display = "list-item"
    })
  }
}
function clearTodo(){
  list.clearTodo()
  saveToLocalStorage()
  showList()
}

// -----------------------------------------------------------------------------

addBtn.addEventListener('click', addTodo)
clearBtn.addEventListener('click', clearTodo)

// -----------------------------------------------------------------------------
