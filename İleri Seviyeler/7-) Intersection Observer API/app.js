
/* const target = document.getElementById("image"); */

/* const target = document.getElementById("load-more-btn"); */
const targets = document.querySelectorAll("#box");
const container = document.getElementById("container");
const content = document.getElementById("content");

const callback = (entries) => {
 /*    if(entries[0].isIntersecting){
        entries[0].target.src = entries[0].target.dataset.src;
        console.log(entries[0]); */

/*     for(let entry of entries){
        if(entry.isIntersecting){
            entry.target.src = entry.target.dataset.src;
        }
    } */


/*     if(entries[0].isIntersecting){
        loadMore();
        } */

        for(let entry of entries){
          /*   if(entry.isIntersecting){
                entry.target.classList.add("active");   
            } */

            // entry.target.classList.toggle("active", entry.isIntersecting);

            entry.target.querySelector(".image").style.transform = 'translateX(' + -(100 - entry.intersectionRatio * 100) + '%)';
            entry.target.querySelector(".image").style.opacity = entry.intersectionRatio;
            entry.target.querySelector(".text").style.transform = 'scale(' + entry.intersectionRatio + ')';
            entry.target.querySelector(".text").style.opacity = entry.intersectionRatio;
        }
};

let keys = [...Array(100).keys()].map(key => "0." + (key < 10 ? "0" + key : key));

console.log(keys);

/* const loadMore = () => {
    console.log("New datas has been loaded.");
    container.innerHTML += content.innerHTML;
} */

const options = {
    threshold: keys,
    // threshold: 0.5,
    /* threshold: [0.2, 0.5, 0.8],
    root: document.getElementById("container"), */
    rootMargin: '100px'
}

const observer = new IntersectionObserver(callback, options);



/* const images = document.querySelectorAll(".image");

images.forEach((image) => {
    observer.observe(image);
}) */

targets.forEach((box) => observer.observe(box));


