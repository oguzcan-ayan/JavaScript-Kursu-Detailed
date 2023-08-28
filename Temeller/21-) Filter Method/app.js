
/* const numbers = [5, 25, 13, 140, 67, 8, 2];

const result = numbers.filter(function(number){

    if(number < 10){

        return number;
    }

});

console.log(result);

 */


/* const names = ["Oğuzcan", "Beyza", "Elmas", "Ercan", "Tuğra", "Yağız", "Berkan", "Serdal"];

const conclusion = names.filter(name => {
    if(name.length <= 5){
        return name;
    }
})

console.log(conclusion); */


/* const users = [

    {
        name : "Oğuzcan", 
        age : 23
    },
    {
        name : "Beyza", 
        age : 19
    },
    {
        name : "Elmas", 
        age : 35
    },
    {
        name : "Ercan", 
        age : 35
    }

];

const result2 = users.filter(user => {
    if(user.age === 35){
        return user;
    }

});

console.log(result2); */


const names = ["OğuzcAn", "Beyza", "Elmas", "ErcaN", "Tuğra", "Yağız", "Berkan", "Serdal"];

/* const result3 = names.filter(name => {
    if(name.toLowerCase().includes("an")){
        return name;
    }

});

console.log(result3); */

const search = (keyword, array) => array.filter(item => item.toLowerCase().includes(keyword));

console.log(search("an", names));


