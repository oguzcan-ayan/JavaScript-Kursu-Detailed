
// const array1 = [2, 4, 6, 7, 10];
/* 
const check = array1.every(number =>{
    if(number >= 2){
        return number;
    }
});
console.log(check); */
/* 
const check = array1.every((number, index, array) =>{

    console.log(index, array);

    if(number % 2 === 0){
        return number;
    }
});
console.log(check); 
 */

const users1 = [

    {
        name : "Oğuzcan",
        age : 23
    },
    {
        name : "Beyza Betül",
        age : 23
    },
    {
        name : "Ercan",
        age : 23
    },
    {
        name : "Elmas",
        age : 23
    }

];

const result1 = users1.every(user => {
    if(user.age === 23){
        return user;
    }   
});

console.log(result1);

/* const users2 = [

    {
        name : "Oğuzcan",
        age : 23
    },
    {
        name : "Serkan",
        age : 19
    },
    {
        name : "Berkan",
        age : 23
    },
    {
        name : "Ercan",
        age : 35
    }

];

const result2 = users2.every(user => {
    if(user.name.includes("an")){
        return user;
    }   
});

console.log(result2); */





