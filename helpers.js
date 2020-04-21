const fs = require('fs');
let id = 0;
let checked = 'false';
// fs.appendFile('todos.txt', 'Writing To The Filesystem! ', (error) => {
//     console.log(error);
// });
 
// console.log('Data has been written to todos.txt');
function add(title,content){
    const todos = fetchTodos();
    const todo = {
        title,
        content,
        id,
        checked 
    };
    try {
        const todosString = fs.readFileSync('todos.json','utf8');
        todos = JSON.parse(todosString);
    } catch (e) {
        
    }
    const repeatedtodos = todos.filter((todo) => todo.title === title);
 
    if (repeatedtodos.length === 0) {
        todo.id = todos.length + 1;
        todos.push(todo);
        saveTodos(todos);
        return todo;
        // fs.writeFileSync('todos.json', JSON.stringify(todos));
    }
}
function check(id){
    const todos = fetchTodos();
    let todoChecked = todos.map((todo)=> {
        todo.id == id;
        if(todo.id ==id)
    {
        todo.checked = "true";
    }
        
        return todo
    });
    console.log(todoChecked);
    saveTodos(todoChecked);
}


function edit(title,content,id){
    const todos = fetchTodos();
    let todoEditing = todos.map((todo)=> {
        todo.id == id;
        if(todo.id ==id)
    {
        todo.title = title;
        todo.content = content;
    }
        
        return todo
    });
    console.log(todoEditing);
    saveTodos(todoEditing);
}

function list(){
    return fetchTodos();
}

function remove(id){
let todos = fetchTodos();
let filteredtodos = todos.filter((todo) => todo.id !== id);
  saveTodos(filteredtodos);
  return todos.length !== filteredtodos.length;

}
var fetchTodos = () => {
    try {
      var todosString = fs.readFileSync('todos.json','utf8');
      return JSON.parse(todosString);
    } catch (e) {
      console.log("error in fetching data");
    }
  };
   
  var saveTodos = (todos) => {
    fs.writeFileSync('todos.json', JSON.stringify(todos));
  };
module.exports = {
    add,
    remove,
    list,
    edit,
    check
}