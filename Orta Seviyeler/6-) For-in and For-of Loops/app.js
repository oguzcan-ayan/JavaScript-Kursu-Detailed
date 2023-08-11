
const person = {
    name : "Oğuzcan",
    age : 23,
    salary : 3000
};

const langs = ["Html", "Css", "Javascript", "React"];

let name = "Oğuzcan";

//  For-in  //

//Object

/* for(let prop in person){
    console.log(prop, person[prop]);
} */

//Array

/* for(let index in langs){
    console.log(index, langs[index]);
}
 */

//String

/* for(let letter in name){
    console.log(letter, name[letter]);
}
 */

//  For-of  //

//Object

/* for(let prop of person){     //For-of loop is not available for object types
    console.log(prop);
} */

//Array

/* for(let index of langs){
    console.log(index);
}
 */

//String

for(let letter of name){
    console.log(letter);
}


