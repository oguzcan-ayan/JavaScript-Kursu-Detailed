
const filterInput = document.getElementById("todo");
const todoForm = document.getElementById("todo-form");


todoForm.addEventListener("submit", submitForm);
    function submitForm(e){
        console.log("Submit Event");

        console.log(e);
        e.preventDefault();
    }


/* filterInput.addEventListener("focus", function(e){

    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
    console.log(e.target.classList);
    //console.log("What's up?");
});
 */


/* filterInput.onfocus = function(){
    console.log("What's up?");
}
 */



