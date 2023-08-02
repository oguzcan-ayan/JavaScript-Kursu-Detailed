//  While Loop  //

/* let i = 0;

while(i < 10){
    console.log(i);
    i++;    //  i = i + 1;      i+=1;
}
 */
/* let i = 10;

while(i > 0){
    /* console.log(i); */
   /*  i--; */    //  i = i - 1;      i-=1;
/*     i -= 2;  
} */

//  Break and Continue  //

/* let i = 0;

while(i < 10){
    console.log(i);
    if(i == 5){
        break;
    }
    i++;
   
} */

/* 
let i = 0;

while(i < 10){

    if(i == 3 || i == 7){
        i++;
        continue;
    }

    console.log(i);
    i++;
} */

//  Do-While    //
/* 
let i = 0;
    do {
        console.log(i);
        i++;


    } while (i < 10);

 */

const langs = ["Python", "Java", "Javascript", "React", "Html", "Css", "C#"];
    
/* let i = 0;

    while(i < langs.length){
        console.log(langs[i]);
        i++;
    }
 */
//  For Loop    //
/* for(let i = 0; i < langs.length; i++){
    console.log(langs[i]);
}
 */
//  ForEach Loop    //
/* langs.forEach(function(lang){
    console.log(lang);
});
 */ 
//  Map Function    //

/* const users = [
    {name: "Oğuzcan", age: 23},
    {name: "Beyza Betül", age: 19},
    {name: "Ercan", age: 47},
    {name: "Elmas", age: 43}
];

const names = users.map(function(user){
        return user.name;
});
const ages = users.map(function(user){
        return user.age;
});
console.log(names);
console.log(ages);
 */
//  for-in Loop"    //
const user = {
    name: "Oğuzcan",
    age: 23
};

for(let i in user){
    console.log(i, user[i]);
}



