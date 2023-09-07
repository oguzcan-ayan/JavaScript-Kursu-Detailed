
const button = document.getElementById("generate-color-btn");

// const colors = ["red", "green", "blue", "purple", "yellow", "pink", "orange", "brown"];

const generateRandomNumber = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber + 1));
}

const generateRgbNumber = () => {
return [
    generateRandomNumber(255),
    generateRandomNumber(255),
    generateRandomNumber(255)
];  //.join(", ") 
};

button.addEventListener("click", () => {

/* const randomNumber = Math.floor(Math.random() * colors.length);

document.body.style.backgroundColor = colors[randomNumber]; */

/* const randomNumber1 = Math.floor(Math.random() * 256);

const randomNumber2 = Math.floor(Math.random() * 256);

const randomNumber3 = Math.floor(Math.random() * 256);

document.body.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
 */

document.body.style.backgroundColor = `rgb(${generateRgbNumber().join(", ")})`;

});













