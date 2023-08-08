//  Create a Dynamic Element(create() method)

//<a id="clear-todos" href="#" class="btn btn-primary">Click on</a>  

const newLink = document.createElement("a");
const cardrow = document.getElementById("clear-todos");

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";


newLink.appendChild(document.createTextNode("Click on other pages"));
cardrow.appendChild(newLink);

console.log(newLink);


//Text Content

/* cardrow.textContent = "jdsghgfj"; */     //We cannot do with this method

//Text Node
/* const text = document.createTextNode("What's up?");
cardrow.appendChild(text);

console.log(cardrow);
console.log(newLink); */
/* console.log(cardrow); */










