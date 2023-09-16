// // import tt from './data.js'

//header-scroll
const titleScroll = document.getElementById("title-scroll");

window.addEventListener('scroll', function(){
    if(titleScroll){
        if(this.scrollY >= 350 && !titleScroll.className.includes("active")){
            titleScroll.classList.add("active")
        }
        else if(this.scrollY < 350 && titleScroll.className.includes("active")){
            titleScroll.classList.remove("active");
        }
    }
})

// const slides = document.querySelectorAll(".slide");
// const next = document.getElementById("next");
// const previous = document.getElementById("prev");
// const auto = true;
// const intervalTime = 5000;
// let slideInterval;
// let currentIndex = 0;

// const showSlides = (startIndex) =>{
//         slides.forEach()


// const nextSlide = () =>{

//     const activeSlide = document.querySelectorAll(".active");
//         if(activeSlide){
//             activeSlide.classList.remove("active");
//         }
//         if(activeSlide.nextElementSibling){
//             activeSlide.nextElementSibling.classList.add("active");
//         }
//         else{
//             slides[0].classList.add("active");
//         }
// };

// const previousSlide = () =>{

//     const activeSlide = document.querySelectorAll(".active");
//         if(activeSlide){
//             activeSlide.classList.remove("active");
//         }
//         if(activeSlide.previousElementSibling){
//             activeSlide.previousElementSibling.classList.add("active");
//         }
//         else{
//             slides[slides.length - 1].classList.add("active");
//         }
// };

// next.addEventListener("click", () =>{
//     nextSlide();
//     if(auto){
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }
// });

// previous.addEventListener("click", () =>{
//     previousSlide();
//     if(auto){
//         clearInterval(slideInterval);
//         slideInterval = setInterval(previousSlide, intervalTime);
//     }
// });






/* 
for(let [key, value] of Object.entries(tt)){
    if(key === "slider"){
        for(let i = 0; i < value.length ; i++){
            const node = document.createElement("a");
            const textnode = document.createTextNode(value[i].title);
            node.appendChild(textnode);
            document.querySelector('.products').appendChild(node);
        }
    }
    else console.log("dasd")
    
}

Object.entries(tt).map(el => console.log(el)) */


/* let element = `<a>dsadsad</a>`

divElementim.innerHTML += element; */

// slider 
let count = 0;

document.getElementById('next').addEventListener("click", () => {
    count++;
    const translateValue = count * 5;
    document.getElementById('start-slider-content').style = `transform: translateX(${-translateValue}%);`
    if(translateValue >= 110){
        count = 0;
    }
});
document.getElementById('prev').addEventListener("click", () => {
    if(count <= 0){
        document.getElementById('start-slider-content').style = ``
    }
    else {
        count--;
        const translateValue = count * -5;
        document.getElementById('start-slider-content').style = `transform: translateX(${-translateValue}%);`
    }

});

//go-product-page
const productLink = document.getElementById("product-link");
const productPage = document.getElementById("product-page");

productLink.addEventListener("click", e => {

   e.preventDefault();

    fetch("product.html")
    .then(response => response.text())
    .then(data => 
     productPage.innerHTML = data)
     .catch(error => console.error("An error has occurred.", error));
});

