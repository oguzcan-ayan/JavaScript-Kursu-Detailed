const todoInput = document.getElementById("todo");
let element;

element = todoInput;

element = todoInput.classList;

/* todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control"); */

element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder", "Write a todo list");
todoInput.setAttribute("title", "input-title");
todoInput.removeAttribute("name");

element = todoInput.hasAttribute("required");
console.log(element);

element = todoInput;
console.log(element);



