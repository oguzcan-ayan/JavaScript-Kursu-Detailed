//  Function Definitions    //

/* function hello(name = "no info", age = "no info") {
    /* console.log("Hello"); */

   /*  if(typeof name === "undefined") name = "no info";
    if(typeof age === "undefined") age = "no info"; */
/* 
    console.log(`Name : ${name} Age : ${age}`);

} */

/* hello("Oğuzcan", 23);   //  Function Call
hello("Beyza Betül", 19);
hello();
hello("Ercan");

 */

function square(x){
    return x * x;
    /* console.log("Hello"); */         //  it never works
}

function cube(x){
    return x * x * x;
}

let a = cube(square(12));

console.log(a);

/* a = cube(a);

console.log(a);
 */


/* function hello(){
    return "Hello";
}

console.log(hello()); */

//  Function Expression

const hello = function(name){
    console.log(`Hello ${name}`);

};

hello("Oğuzcan");

/* //  Immediately Invoked Function Expressions(IIFE)
(function(name){
    console.log(`Hello ${name}`);
})("Beyza Betül");
 */

const database = {
    host: "localhost",  //  Property
    add: function(){    //  Method
        console.log("user has been added");
    },
    get: function(){    //  Method  
        console.log("user has been obtained");
    },
    update: function(id){   //Method
        console.log(`user has been updated. id : ${id}`);
    },
    delete: function(id){   //Method
        console.log(`user has been deleted. id : ${id}`);
    }
}

console.log(database.host);
database.add();
database.update(5);
database.delete(3);
database.get();

