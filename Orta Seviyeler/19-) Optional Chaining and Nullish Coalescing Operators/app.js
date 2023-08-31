
//  ?? -> Nullish Coalescing 
//  ?. -> Optional Chaining 

const user = {

    name : "Oğuzcan", 
    cat : {
        
        name : "Boncuk"

    },

    dog : {

        name : "Rain"

    }

};

// console.log(user.dog?.name);
// console.log("Did the code worked?");

console.log("Dog name is : " + user.dog?.name ?? "Unknown");



/* function sayHello(message, callback){

    console.log("Message : ", message);

    callback?.();

}

sayHello("Oğuzcan Ayan");

sayHello("Beyza Betül Ayan", () => console.log("Callback has worked."));


 */






