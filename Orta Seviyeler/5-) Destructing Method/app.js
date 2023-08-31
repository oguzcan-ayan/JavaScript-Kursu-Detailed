
/* let number1, number2; */

// arr = [100, 200, 300, 400];

/* number1 = arr[0];
number2 = arr[1]; */


// Destructing //

//Array Destructing

/* [number1, number2] = arr; */

/* const [number1, number2] = arr; 

console.log(number1, number2); */

//Object Destructing

/* const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1, c:number2, e:number3} = numbers;

console.log(number1, number2, number3); */

//Function Destructing 

/* const getLangs = () => ["Html", "Css", "Javascript", "React"];

const [lang1, lang2, lang3, lang4] = getLangs();

console.log(lang1, lang2, lang3, lang4);
 */

//Object Destructing Example

const person = {
    name : "Oğuzcan",
    year : 2000,
    salary : 5000,
    showInfos : () => console.log("Informations are now being viewed...")
};

const {name:username, year:sun, salary:wage, showInfos:displayInfos} = person;

console.log(username, sun, wage);
displayInfos();



