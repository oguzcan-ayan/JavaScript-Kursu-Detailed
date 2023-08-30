
const numbers = [1, 3, 5, 7];

const addNumber = number => {
    if(!numbers.includes(number)){
        numbers.push(number);
    }
}
addNumber(5);
addNumber(5);
addNumber(6);
addNumber(9);
addNumber(2);
addNumber(0);

// console.log(numbers);

// console.log(numbers.includes(9));




const names = ["Oğuzcan", "Beyza", "Elmas", "Ercan", "Oğuzcan"];

// console.log(names[0].includes("can"));

// console.log(names.includes("Elmas"));

// console.log(names.includes("Beyza", -4));     /* start = names.length + (index) */





