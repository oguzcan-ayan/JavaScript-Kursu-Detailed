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


// slider-top
let slideWidth = document.querySelectorAll(".start-slider-content > .slide");
let oneElement = document.querySelector('.slide').clientWidth + 50; 
let count = 0;


document.getElementById('next-start').addEventListener("click", () => {
    count += 3;
    let translateValue = (oneElement * count);
    document.getElementById('start-slider-content').style = `transform: translateX(${-translateValue}px);`
    if(count >= slideWidth.length - 11){
        count = -3;
    }
});

document.getElementById('prev-start').addEventListener("click", () => {
    if(count <= 0){
        document.getElementById('start-slider-content').style = ``
    }
    else {
        count -= 3;
        let translateValue = (oneElement * count);
        document.getElementById('start-slider-content').style = `transform: translateX(${-translateValue}px);`

    }

});

//slider-middle
let slideLength = document.querySelectorAll(".middle-slider-content > .slider-products");
let oneSlideElement = document.querySelector('.slider-products').clientWidth + 50 ; 
let counter = 0;

document.getElementById('next-middle').addEventListener("click", () => {
    
    counter += 3;
    let translateValue = (oneSlideElement * counter);
    console.log(translateValue);
    document.getElementById('middle-slider-content').style = `transform: translateX(${-translateValue}px);`
    if(counter >= slideLength.length - 11){
        counter = 0;
    }
});
document.getElementById('prev-middle').addEventListener("click", () => {
    if(counter <= 0){
        document.getElementById('middle-slider-content').style = ``
    }
    else {
        counter -= 3;
        let translateValue = (oneSlideElement * counter);
        document.getElementById('middle-slider-content').style = `transform: translateX(${-translateValue}px);`
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
     productPage.innerHTML += data)
     .catch(error => console.error("An error has occurred.", error));
});

//searchbox-click
const searchbox = document.querySelector("#searchbox");

searchbox.addEventListener("click", () => {
    searchbox.classList.add("boxColor");
});

/* const searchboxInput = document.querySelector("#searchboxInput");

searchboxInput.addEventListener("click", e =>{
    searchboxInput.setAttribute('style', 'border: 1px solid white;');
}); */

//go-top-page
const goUp = document.getElementById("up-button");

goUp.addEventListener("click", e => {
    e.preventDefault();
    document.body.scrollIntoView({
        behavior: "smooth"
    });
});

/* window.addEventListener("scroll", () => {
   if(goUp){
    if(this.scrollY >= 350 && !goUp.className.includes("isActive")){
        goUp.classList.add("isActive");
    }
    else if(this.scrollY < 350 && goUp.className.includes("isActive")){
        goUp.classList.remove("isActive");
    }

   }

}); */

//Web Share

const shareBtn = document.getElementById("share-app-button");
const shareContent = document.getElementById("share-content");
const error = document.getElementById("error");

shareBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(navigator.share){
        const shareData = {
            title : "Trendyol",
            text : "Uygulamayı paylaştığınız için teşekkür ederiz",
            url : "http://127.0.0.1:5500/Projects/9-)%20E-commerce%20Project/index.html"
        }
        
        navigator.share(shareData)
        .then( () => {
            shareContent.style.display = "inline";
        })
        .catch( () =>{
            error.style.display = "inline";
        })
    }
});

//Zooming

const zoom = document.querySelector('input[type="range"]');

zoom.addEventListener("input", e => {
    document.documentElement.style.setProperty('--zoom', Number(e.target.value));
})

//scrollIntoView Applying Method
/* 
const lists = document.querySelectorAll("nav ul li");

lists.forEach(list => {
    list.addEventListener("click", e =>{
        e.preventDefault();
        [...lists].map(list => list.classList.remove("activate"));
        list.classList.add("activate");

        let target = list.querySelector("#scrollLink").getAttribute("href").replace("#", "");
        document.getElementById(target).scrollIntoView({
            behavior:  "smooth",
            block: "center",
            inline: "center"
        });
        let scrollTimeout;
        addEventListener("scroll", () =>{
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function(){
                document.querySelector(".activate").scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });
            }, 1000);
        })
    });
});

 */
