
const target = document.getElementById("image");

const callback = (entries) => {
    if(entries[0].isIntersecting){
        entries[0].target.src = entries[0].target.dataset.src;
        console.log(entries[0]);
    }
};

const options = {
    /* threshold: [0.2, 0.5, 0.8],
    root: document.getElementById("container"), */
    rootMargin: '-100px'
}

const observer = new IntersectionObserver(callback, options);

observer.observe(target);









