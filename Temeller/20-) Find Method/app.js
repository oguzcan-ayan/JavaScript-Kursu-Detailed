
/* const numbers = [5, 12, 8, 135, 56];

const found = numbers.find(number => {
    if(number > 10){
        return number;
    }

});

console.log(found); */

const users = [

    {
        id : 1,
        name : "Oğuzcan"
    },

    {
        id : 2,
        name : "Ahmet"
    },
    {
        id : 3,
        name : "Mehmet"
    }
    
];

const foundUser = users.find(user => {
        if(user.id === 2){
            return user;
        }

});

console.log(foundUser);






