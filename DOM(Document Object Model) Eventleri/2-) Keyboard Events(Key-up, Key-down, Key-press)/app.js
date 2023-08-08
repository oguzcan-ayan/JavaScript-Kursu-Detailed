//  Keyboard Events //

const header = document.querySelector(".card-title");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e){
    header.textContent = e.target.value;
 /*  console.log(e.target.value); */
}

//key-press

/* document.addEventListener("keypress", run);

function run(e){

    console.log(e.which);
    console.log(e.key);
    console.log("What's up?");
} */

//key-down

/* document.addEventListener("keydown", run);

function run(e){

    console.log(e.which);
    console.log(e.key);

} */

//key-up

/* document.addEventListener("keyup", run);

function run(e){

    console.log(e.which);
    console.log(e.key);

}
 */



