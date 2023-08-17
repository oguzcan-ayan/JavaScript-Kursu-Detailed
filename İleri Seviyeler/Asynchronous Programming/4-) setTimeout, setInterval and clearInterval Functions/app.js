
//  setTimeout

/* setTimeout(function(){

    console.log("Hello");

}, 2000);
 */

//  setInterval

let i = 0;

let value = setInterval(function(){
    i++;
    console.log("Number :", i);
}, 1000);

//  clearInterval
document.getElementById("clear-btn").addEventListener("click", function(){
    clearInterval(value);
});

document.getElementById("continue-btn").addEventListener("click",function(){
   setInterval(function(){
            i++;
            console.log("Number :",i);
   }, 1000);
});


