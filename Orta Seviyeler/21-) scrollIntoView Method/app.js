const lists = document.querySelectorAll("nav ul li");   //  This is a NodeList at first, that's why, we have to make this as an array.

    lists.forEach(list => {
        list.addEventListener("click", e => {
            e.preventDefault();
            [...lists].map(list => list.classList.remove("active"));
            list.classList.add("active");
            let target = list.querySelector("a").getAttribute("href").replace("#", "");
            document.getElementById(target).scrollIntoView({
                behavior: "smooth",
                block: "center",    
                inline: "center"
            });
            let scrollTimeout;
                addEventListener("scroll", () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(function(){
                    document.querySelector(".active").scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",    
                        inline: "center"
                    });
                }, 100); 
            });
        }); 
    });

 document.getElementById("to-top").addEventListener("click", function(e){
    e.preventDefault();
    document.body.scrollIntoView({
        behavior: "smooth"
    })
})










