let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(3)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

//  Child Nodes(Including text)

value = todoList.childNodes;
value = todoList.childNodes[2];
value = todoList.childNodes[3];
value = todoList.childNodes[todoList.childNodes.length - 1];

//  Children(Only Element)

value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[1].textContent = "It has been changed";


value = cardrow;
value = cardrow.children;
value = cardrow.children[1].children[2].textContent = "It has been changed too";


value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;


value = cardrow;
value = cardrow.parentNode;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

//  Element Siblings

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling.nextElementSibling;
value = todo.previousElementSibling.previousElementSibling.previousElementSibling;
console.log(value);


