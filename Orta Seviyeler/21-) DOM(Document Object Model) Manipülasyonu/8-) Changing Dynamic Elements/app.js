//  Change a Dynamic Element(replace() method)

//<h3 class="card-title" id="tasks-title">TO DO LIST</h3>

const cardrow = document.querySelector(".card.row");

const newElement = document.createElement("h1");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "New To Do Lists";

//Old Element

const oldElement = document.querySelector("#tasks-title");

cardrow.replaceChild(newElement,oldElement);

console.log(cardrow);
console.log(oldElement);
console.log(newElement);









