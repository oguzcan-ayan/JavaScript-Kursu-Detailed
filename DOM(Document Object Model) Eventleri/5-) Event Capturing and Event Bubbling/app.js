//Event Bubbling

/* document.querySelector(".container").addEventListener("click", run); */

/* document.querySelector(".card.row").addEventListener("click", run); */

/* document.querySelector(".form-group").addEventListener("click", run);

function run(e){
    console.log("Form group");
} */

//Event Capturing or Delegation

const cardrow = document.querySelector(".card.row"); 
cardrow.addEventListener("click", run);
/* const listItem = document.getElementsByTagName("li");
listItem.addEventListener("click", run); */
// const unorderedList = document.querySelector(".list-group");
// unorderedList.addEventListener("click", run);

    function run(e){
        if(e.target.className === "form-control"){
            console.log("Filter operation");
        }
        if(e.target.className === "list-group-item danger"){
            console.log("Select operation");
        }
        if(e.target.className === "card-title"){
            console.log("Title");
        }
        /* console.log("What's up?"); */
    }








