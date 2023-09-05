
//  Callback Functions  //

const langs = ["Html", "Css", "Javascript", "React"];


/* langs.forEach(function(lang){
    console.log(lang);
}); */

document.getElementById("btn").addEventListener("click", function(){
        // console.log("Click");
        // process1(process2);
    addLang("C#", getAllLangs);  

}); 

function addLang(lang, callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("It has been added");
        callback();
    }, 3000);

}

function getAllLangs(){
        setTimeout(function(){
            langs.forEach(function(lang){
                console.log(lang);
            });
        }, 1000);
}

/* function process1(callback){
    setTimeout(function(){
        console.log("Process 1");
        callback();
    }, 3000);
}

function process2(){
    setTimeout(function(){
        console.log("Process 2");
    }, 1000);
   
} */




