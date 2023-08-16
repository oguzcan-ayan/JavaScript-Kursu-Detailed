
//Sets

const myset = new Set();
const key = [1, 2, 3];
myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Oğuzcan");
myset.add(true);
myset.add(key);
myset.add({a:1, b:2});

const myset2 = new Set([100, 3.14, "Oğuzcan"]);
console.log(typeof myset2);

/* console.log(myset);
console.log(myset2);
 */

//Size
/* console.log(myset.size);
console.log(myset2.size);
 */

//Delete Method
/* myset.delete("Oğuzcan");
console.log(myset);
 */

//Has Method
/* console.log(myset.has("Oğuzcan"));
console.log(myset.has(3.14));
console.log(myset.has(2000));
console.log(myset.has(key));
 */

//ForEach
/* myset.forEach(function(value){
    console.log(value);
});
 */

//For-of
/* for(let value of myset){
    console.log(value);
}
 */

//Creating Arrays from Sets
const array = Array.from(myset);
console.log(array);

console.log(array, ...key);