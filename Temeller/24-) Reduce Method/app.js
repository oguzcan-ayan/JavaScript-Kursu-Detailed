
// const numbers = [2, 6, 3, 7, 9];
/* let total = 0;

numbers.forEach(number => {
    total += number;
    return total;
})

console.log(total); */


/* let total2 = numbers.reduce((acc, number) => {
        acc += number;
        return acc;
});

console.log(total2); */


/* const basket = [

    {
        name : "Iphone 14 Pro Max",
        price : 80000
    },
    {
        name : "HP Omen",
        price : 50000
    },
    {
        name : "Anker Soundcore Q10",
        price : 3000
    }

];

const totalBasket = basket.reduce((acc, product) => {

    acc += product.price;
    return acc;

}, 0);

console.log(totalBasket); */


/* const names = ["Oğuzcan", "Ahmet", "Mehmet", "Oğuzcan", "Hasan", "Mehmet"];

let countedNames = names.reduce((allNames, name) =>{

    if(name in allNames){
        allNames[name]++;
    }
    else{
        allNames[name] = 1;
    }

    return allNames;

}, {});

console.log(countedNames); */
/* 
const products = [

    {
        name : "Xiaomi Mi 10T Pro",
        brand : "Xiaomi"
    },
    {
        name : "HP Omen",
        brand : "HP"
    },
    {
        name : "Anker Soundcore Q10",
        brand : "Anker"
    },
    {
        name : "Xiaomi Redmi 10 Pro",
        brand : "Xiaomi"
    },
    {
        name : "Iphone 14 Pro Max",
        brand : "Apple"
    },
    {
        name : "Macbook Pro",
        brand : "Apple"
    }

]; */

/* 
let group = "brand";
let groupedProducts = products.reduce((acc, product) => {

    let key = product[group];

    if(!acc[key]){
        acc[key] = [];
    }

    acc[key].push(product);
    return acc;

}, {});

console.log(groupedProducts); */

/* let groupBy = (array, property) =>{

    return array.reduce((acc, product) =>{
        let key = product[property];
    
        if(!acc[key]){
            acc[key] = [];
        }
    
        acc[key].push(product);
        return acc;
    
    }, {});
}

console.log(groupBy(products, "brand")); */


const posts = [

    {
        title : "Post 1",
        tags : ["Html", "Css"]
    },
    {
        title : "Post 1",
        tags : ["Javascript", "React"]
    },
    {
        title : "Post 1",
        tags : ["Html", "C#"]
    },
    {
        title : "Post 1",
        tags : ["Python", "Angular"]
    }

];

const allTags = posts.reduce((acc, post) =>
    [...acc, ...post.tags],[]);

// console.log(allTags);


const array2 = ["a", "b", "c", "d", "a", "c", "f", "g", "g"];

/* console.log(array2);

const result = array2.reduce((acc, item) => {

    if(!acc.includes(item)){
        acc.push(item);
    }

    return acc;

}, []);

console.log(result); */

// console.log([...new Set(allTags)]);

// console.log([...new Set(array2)]);


const numbers2 = [-1, 6, 3, -5, -4, 0, 7, 8];

let conclusion = numbers2.reduce((acc, number) => {

    if(number > 0){
        acc.push(number * 2);
    }

    return acc;

}, []);

console.log(conclusion);
