
const filter = document.getElementById("todo");
/* 
document.addEventListener("DOMContentLoaded", load);
    function load(e){
        console.log("Page has been loaded");
        console.log(e);

    }
 */

//Focus
/* filter.addEventListener("focus", run); */

//Blur
/* filter.addEventListener("blur", run); */

//Paste
/* filter.addEventListener("paste", run); */

//Copy
/* filter.addEventListener("copy", run); */

//Cut
/* filter.addEventListener("cut", run); */

//Select
filter.addEventListener("select", run);
    function run(e){
        console.log(e.type);
        
    }








