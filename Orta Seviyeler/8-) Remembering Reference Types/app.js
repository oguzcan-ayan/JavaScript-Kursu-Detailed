//  Reference Types //

/* let a = "Oğuzcan";
let b = "Oğuzcan";

if(a === b){
    console.log("Equal");
}   
 */

/* let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

if(array1 === array2){
    console.log("Equal");
}
 */

/* const person1 = {
    name : "Oğuzcan",
    age : 23
};
const person2 = {
    name : "Oğuzcan",
    age : 23
};

if(person1 === person2){
    console.log("Equal");
}
 */

const cities = new Map();
const key = [1, 2, 3];

cities.set("Ankara", 5);
cities.set("İstanbul", 20);
cities.set(key, "Array");

console.log(cities.get(key));


