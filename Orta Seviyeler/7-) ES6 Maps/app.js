// Maps(Key-Value) //

// let myMap = new Map();

// console.log(myMap);

// const key1 = "Oğuzcan";
// const key2 = {a:10, b:20};
// const key3 = () => 2;

//Set
// myMap.set(key1,"String Value");
// myMap.set(key2,"Object Literal Value");
// myMap.set(key3,"Function Value");

//Get
/* console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));
 */
// console.log(myMap);

//Map Size
// console.log(myMap.size);


// const cities = new Map();

// cities.set("İstanbul", 20);
// cities.set("Ankara", 5);
// cities.set("İzmir", 8);

//ForEach

// cities.forEach(function(key, value){
    
//     console.log(value, key);
// });
    
//For-of

/* for(let [key, value] of cities){ //Destructing
    console.log(key, value);
} */

//Map Keys

/* for(let key of cities.keys()){
    console.log(key);
}
 */
//Map Values 
/*     for(let value of cities.values()){
        console.log(value);
    } */

//Creating Maps from Arrays

/* const array = [["key1", "value1"],["key2", "value2"]];
const lastMap = new Map(array);

console.log(lastMap);
 */
//Creating Arrays from Maps

const cities = new Map();

cities.set("İstanbul", 20);
cities.set("Ankara", 5);
cities.set("İzmir", 8);

cities.delete("İstanbul", 20);
console.log(cities.has("Ankara"));
console.log(cities.size);
console.log(typeof cities);
//[["İstanbul", 20],["Ankara", 5],["İzmir", 8]]
const array = Array.from(cities);

console.log(array);

// console.log(array.length);