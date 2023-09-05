
const link = document.getElementsByClassName("link");

const buttonPrev = document.getElementById("btn1");
const buttonNext = document.getElementById("btn2");

const nextButton = () =>{

    const activeLink = document.querySelector(".active");
        activeLink.classList.remove("active");
        if(activeLink.nextElementSibling){
            activeLink.nextElementSibling.classList.add("active");
        }
        else{
            link[0].classList.add("active");
        }
};
const prevButton = () =>{

    const activeLink = document.querySelector(".active");
        activeLink.classList.remove("active");
        if(activeLink.previousElementSibling){
            activeLink.previousElementSibling.classList.add("active");
        }
        else{
            link[link.length - 1].classList.add("active");
        }
};

buttonNext.addEventListener("click", () => {    
    nextButton();
});
buttonPrev.addEventListener("click", () => {    
    prevButton();
});












