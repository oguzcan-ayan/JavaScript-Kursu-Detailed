// import tt from './data.js'

const titleScroll = document.getElementById("title-scroll");

window.addEventListener('scroll', function(e){
    if(titleScroll){
        if(this.scrollY >= 140 && !titleScroll.className.includes("active")){
            titleScroll.classList.add("active")
        }
        else if(this.scrollY < 140 && titleScroll.className.includes("active")){
            titleScroll.classList.remove("active");
        }
    }
})


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