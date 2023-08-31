//  Session Storage - key and value   //

/* console.log(sessionStorage); */

//Buttons

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//Inputs

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
    function addItem(e){
        sessionStorage.setItem(addKey.value, addValue.value);
    }
del.addEventListener("click", delItem);
    function delItem(e){
        sessionStorage.removeItem(deleteKey.value);
    }
clear.addEventListener("click", clearItem);
    function clearItem(e){
        sessionStorage.clear();
    }

