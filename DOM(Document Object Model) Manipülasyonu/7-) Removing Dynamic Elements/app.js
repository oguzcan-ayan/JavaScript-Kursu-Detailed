//  Remove a Dynamic Element(remove() method)

const todoList = document.querySelector("ul.list-group");
const todo = document.querySelectorAll("li.list-group-item");

//Remove Method

/* todo[0].remove(); */

//Remove Child

todoList.removeChild(todoList.lastElementChild);
/* todoList.removeChild(todo[1]);  */


console.log(todoList);
console.log(todo);