//Select all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //All event listeners
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodoFromUI);
}

function deleteTodoFromUI(e){
    
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo item has been deleted successfully");
    }

}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo, index){
        if(todo === deletetodo){
            todos.splice(index, 1); //We can delete an item from array
        }
        localStorage.setItem("todos", JSON.stringify(todos));

    });
}


function loadAllTodosToUI(){
       let todos =  getTodosFromStorage();

       todos.forEach(function(todo) {
       addTodoToUI(todo);
       });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "Please enter a todo value...");

        /* <div class="alert alert-danger" role="alert">
             This is a danger alert—check it out!
           </div> */

    } else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "You entered a right value");
    }

    e.preventDefault();
}

function getTodosFromStorage() { //Get todo values from the Storage
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message; /* alert.appendChild(document.createTextNode(message));  */

    firstCardBody.appendChild(alert);

    //setTimeOut

    setTimeout(function () {
        alert.remove();
    }, 1500);

}

function addTodoToUI(newTodo) { //It inserts an entered string value to the UI

    /* 

    <li class="list-group-item d-flex justify-content-between">
            Todo 1
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>

    </li> 

    */

    //Creating List Item
    const listItem = document.createElement("li");


    //Creating Link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    //Creating Text Node
    listItem.appendChild(document.createTextNode(newTodo)); /* listItem.textContent = newTodo; */
    listItem.appendChild(link);

    //Insert List Item to TodoList
    todoList.appendChild(listItem);

    todoInput.value = "";
    // console.log(listItem);

}