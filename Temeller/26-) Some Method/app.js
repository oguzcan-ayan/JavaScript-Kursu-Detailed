
const products = [
    {id: 1,
     name:"Pencil",  
     price:5},
    {id: 2,
     name:"Notebook",  
     price:10},
    {id: 3,
     name:"Eraser",  
     price:3},
    {id: 4,
     name:"sharpener",  
     price:2},
    {id: 5,
     name:"Bag",  
     price:15},
];

const productInfo1 = products.some((product) => {
    if(product.price < 1){
        return product;
    }
});
const productInfo2 = products.some((product) => {
    if(product.price > 5){
        return product;
    }
});

console.log(productInfo1);
console.log(productInfo2);


