//  Selecting Elements according to the Id

let element;

element = document.getElementById("a-1");   //Html Collection
element = document.getElementById("a-3");
console.log(element);
//  Selecting Elements according to the Class

element = document.getElementsByClassName("dark");  //Html Collection
element = document.getElementsByClassName("btn");

//  Selecting Elements according to the Tag

element = document.getElementsByTagName("a");   //Html Collection
element = document.getElementsByTagName("form");
element = document.getElementsByTagName("div");

//  Query Selector - look alike Css Selector - It selects only one element

//id
element = document.querySelector("#a-1");
element = document.querySelector("#a-3");

//class
element = document.querySelector(".btn");
element = document.querySelector(".dark");

//tag
element = document.querySelector("div");
element = document.querySelector("form");
element = document.querySelector("a");

//  querySelectorAll - It selects all elements if there is more than one value

/* element = document.querySelectorAll("a");   //Node List

element.forEach(function(el){
    console.log(el);
}); */
/* console.log(element); */









