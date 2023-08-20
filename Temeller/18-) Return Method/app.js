
    //  Return Method  //

/* function cube(number){

    let result = number * number * number;

    console.log(result);
}

cube(3); */

/* let cubeReturnValue = cube(2);

let squareReturnValue = square(cubeReturnValue);

console.log(squareReturnValue);

function cube(number){

    let result = number * number * number;

    return result;

}

function square(number){

    let result = number * number;

    return result; 

} */

/* function text(){
    console.log("Oğuzcan");
}

text();
 */


let cubeReturnValue = cube(2);

function cube(number){

    let result = number * number * number;

    let squareReturnValue = square(result);

    console.log(squareReturnValue);

}

function square(number){

    let result = number * number;

    return result; 

}

