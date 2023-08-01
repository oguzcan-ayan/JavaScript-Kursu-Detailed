let value;

const numbers = [25, 34, 21, 14, 65, 78, 94];

//const numbers2 = new Array(1, 2, 3, 4, 5, 6);

const langs = ["Python", "Java", "Javascript", "Html", "Css", "React", "C#"];

const a = ["Hello", 30, null, undefined, 3.14];

//  Length
value = numbers.length;

//  Index
value = numbers[0]; 
value = numbers[3]; 
value = numbers[5];
value = numbers[numbers.length - 1];

//  Changing an array index value any of them
numbers[2] = 500;
value = numbers;

//  Index of
value = numbers.indexOf(500);

// Push
numbers.push(37);
value = numbers;

//  Unshift
numbers.unshift(35);
value = numbers;

//  Pop
numbers.pop();
value = numbers;

//  shift
numbers.shift();
value = numbers;

//  splice
numbers.splice(2,1);
value = numbers;

//  reverse
numbers.reverse();
value = numbers;

//  sort(From lower to upper)
numbers.sort(function(x, y){
    return x - y;
});
value = numbers;
console.log(value);

//  sort(From upper to lower)
numbers.sort(function(x, y){
    return y - x;
});
value = numbers;
console.log(value);


