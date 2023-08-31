
const button = document.getElementById("share-btn");
const content = document.getElementById("content");
const error = document.getElementById("error");

button.addEventListener("click", e => {
    e.preventDefault();
    if(navigator.share){
        const shareData = {
            title : "Oğuzcan Ayan", 
            text : "This site is very beautiful, you must try.",
            url : "https://www.youtube.com/"
        };
        navigator.share(shareData)
        .then( () => {
            content.style.display = "block";
        })
        .catch(() => {
            error.style.display = "block";
        }) 
    }
});










