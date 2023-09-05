/* 
function getData(data){ //a function returning a Promise Object

    return new Promise(function(resolve, reject){

        setTimeout(function(){
            
            if(typeof data === "string"){
                //True
                resolve(data);
            }
            else{
                //False
                reject("An error has occured. Please a string value.");
            }

        }, 5000);
        
    });


}

getData("Value has come").then(function(response){
    console.log("Incoming value : " + response);    
}).catch(function(err){
    console.error(err);
});  */


/* function getData(data){ //a function returning a Promise Object

    return new Promise(function(resolve, reject){

        setTimeout(function(){
            
            if(typeof data === "string"){
                //True
                resolve(data);
            }
            else{
                //False
                reject("An error has occured. Please enter a string value.");
            }

        }, 5000);
        
    });


}

getData("Value has come")
.then(response => console.log("Incoming value : " + response))
.catch(err => console.error(err)); 
 */


function addTwoNumber(number){

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            if(typeof number === "number"){
              //True
              resolve(number + 2);
            }
            else{
              //False
              reject(new Error("An error has occured. Please enter a number."));  
            }
    
        }, 5000);
    
    })

}

addTwoNumber(5)
.then(response => {console.log("The number is : " + response)
    return response + 2})
.then(response2 => console.log("The second number is : " + response2))
.catch(err => console.error(err));















