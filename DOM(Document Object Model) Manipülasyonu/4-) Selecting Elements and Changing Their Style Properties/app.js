
const element = document.querySelector("#clear-todos");

//  Element Properties

// console.log(element);
/* console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.classList.value);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href); */

element.classList.add("text-primary");
console.log(element);

//  Changing Style and Element Properties

/* element.className = "btn btn-dark";
element.style.color = "red";
element.style.marginLeft = "100px";
element.href = "https://www.google.com";
element.target = "_blank";
element.textContent = "Delete it";
element.textContent = "<span>Delete it</span>"; //  This is wrong
element.innerHTML = "<span style = 'color : darkgreen'>Delete it</span>"; */    //  This is true

/* const elements = document.querySelectorAll(".list-group-item");  //(#to-dos) //  Node List
elements.forEach(function(el){
    el.style.color = "red";
    el.style.background = "gray";
});
 */

/* let element2 = document.querySelectorAll("li:first-child");
element2 = document.querySelectorAll("li:last-child");
element2 = document.querySelectorAll("li:nth-child(3)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el2){
    el2.style.color = "blue";
    el2.style.background = "yellow";
}); */
