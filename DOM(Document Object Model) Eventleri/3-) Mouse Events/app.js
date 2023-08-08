//  Mouse Events   //

const cardrow = document.querySelector(".card.row");
const title = document.querySelector("#tasks-title");

//Click
/* title.addEventListener("click", run); */

//Double-Click
/* title.addEventListener("dblclick", run); */

//Mouse-down
/* title.addEventListener("mousedown", run); */

//Mouse-up
/* title.addEventListener("mouseup", run); */

//Mouse-over
/* title.addEventListener("mouseover", run); */

//Mouse-out
/* title.addEventListener("mouseout", run); */
/* 
cardrow.addEventListener("mouseover", run);
cardrow.addEventListener("mouseout", run);
 */

//Mouse-enter
cardrow.addEventListener("mouseenter", run);
//Mouse-leave
cardrow.addEventListener("mouseleave", run);

/* title.addEventListener("mouseenter", run);
title.addEventListener("mouseleave", run); */

function run(e){
    console.log(e.type);
}


/* console.log(cardrow);
console.log(title);
 */











