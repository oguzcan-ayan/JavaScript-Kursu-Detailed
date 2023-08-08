// Local Storage //

//Set item

/* localStorage.setItem("action", "Move");
localStorage.setItem("repeat", 20);
 */
//Get item

/* const value = localStorage.getItem("repeat");
console.log(value);
console.log(typeof value);
 */
//Clear Local Storage

/* localStorage.clear(); */

/* console.log(localStorage.getItem("get")); */

//Check Local Storage
/* if(localStorage.getItem("action") === null){
    console.log("Unvalid storage value");
}
else{
    console.log("Valid storage value");
    console.log(localStorage.getItem("action"));
}
 */

//Local Storage - Writing an array

/* const todos = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"]; */

/* localStorage.setItem("todos", todos);

console.log(localStorage.getItem("todos", todos));

console.log( typeof localStorage.getItem("todos", todos));

 */

/* localStorage.setItem("todos", JSON.stringify(todos));

console.log(localStorage.getItem("todos", JSON.stringify(todos)));
 */
/* const value = JSON.parse(localStorage.getItem("todos"));

console.log(value);
 */

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addToDo);
    function addToDo(e){

       let value = todoInput.value;

       let todos;

      if(localStorage.getItem("todos") === null){
            todos = [];
      }
      else{
        todos = JSON.parse(localStorage.getItem("todos"));
      }
        todos.push(value);

      localStorage.setItem("todos", JSON.stringify(todos));

      e.preventDefault();
    }











