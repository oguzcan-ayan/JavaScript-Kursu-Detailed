/* 
async function test(data){  //  Promise

    //  return new Promise

    return new Promise((resolve, reject) =>{

        resolve(data);

    });

    return data;

}

test("Hello").then(response => console.log(response)); 
*/

/* async function test(data){

    let promise = new Promise((resolve, reject) =>{
        setTimeout(function(){

            resolve("This is a value");

        }, 5000);
    });


    let response = await promise;   //It waits 5 seconds

    console.log(response);

    console.log("Hello");

}

test("Hi"); 
*/
/* 
async function testData(data){

    let promise = new Promise((resolve, reject) =>{

        setTimeout(function(){

            if(typeof data === "string"){

              resolve(data);
            }
            else{
                reject(new Error("Invalid value. Please enter a string value."));
            }

        }, 5000);

    });

    const response = await promise;

    return response;

}

testData("Hello")
.then(data => console.log(data))
.catch(err => console.error(err))
*/

async function getCurrency(url){

    const response = await fetch(url); //  Response Object

    const data = await response.json();  //   Json Object

    return data;

}

getCurrency("https://v6.exchangerate-api.com/v6/d02be2b931ff39f6d1e4ce19/latest/USD")
.then(response => console.log(response))
.catch(err => console.log(err))
// .then(response => console.log(response.conversion_rates.TRY))












