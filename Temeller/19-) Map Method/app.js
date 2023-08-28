/* 
const numbers = [1, 4, 9];

numbers.forEach(function(number, index){

    numbers[index] = number * 2;
    
});

console.log(numbers);
 */

/* const numbers = [1, 4, 9];

const result = numbers.map(number => number * 2);
const conclusion = numbers.map(number => Math.sqrt(number));

console.log(result);
console.log(conclusion); */

const users = [

    {
        id : 1,
        name : "Oğuzcan", 
        surname : "Ayan",
        age : 23
    },

    {
        id : 2,
        name : "Ahmet", 
        surname : "Tarakçı",
        age : 30
    }

];

const date = new Date();
const result2 = users.map(user => {

    return{
        fullName : `${user.name} ${user.surname}`,
        yearOfBirth : date.getFullYear() - user.age
    }   

});

console.log(users);
console.log(result2);





