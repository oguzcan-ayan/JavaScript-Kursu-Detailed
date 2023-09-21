
//add-show-comments

const commentAdd = document.getElementById("comment-form-add");
const showComments = document.getElementById("show-comments");
const commentDelete = document.getElementById("delete-comment-button");

    let comments;

    if(localStorage.getItem("comments") === null){
        comments = [];

    }
    else{
        comments = JSON.parse(localStorage.getItem("comments"));
    }

    


function showCommentsInUI(){
    showComments.innerHTML = '';
    if(JSON.parse(localStorage.getItem("comments"))){
        JSON.parse(localStorage.getItem("comments")).map(comment => {
            const showComment = document.createElement("div");
            showComment.textContent = `${comment.name} : ${comment.comment}`;
            showComments.appendChild(showComment);
        }); 
    }     
}

showCommentsInUI();


    commentAdd.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const commentInput = document.getElementById("comment");

        const name = nameInput.value;
        const comment = commentInput.value;
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({name, comment});
        
        localStorage.setItem("comments", JSON.stringify(comments));

        showCommentsInUI();

        nameInput.value = '';
        commentInput.value = '';
    });

//deleteFromUI
/* 
    let commentIndex = 0;
    showComments.forEach(show => {
        if(commentIndex < showComments.length){
            showComments.remove();
        }
    })
 */

//deleteFromStorage
    commentDelete.addEventListener("click", (e) => {
        
        /* let commentIndex = 0;
        showComments.forEach(show => {
            commentIndex++;
        if(commentIndex < showComments.length){
            show.remove();
        }
    });

        let comments; 
    
        if(localStorage.getItem("comments") === null){
            comments = [];
    
        }
        else{
            comments = JSON.parse(localStorage.getItem("comments"));
        }

        comments.forEach( () => {
            commentIndex++;

            if(commentIndex < comments.length){
                localStorage.removeItem("comments");
                
            }
        }); */

        localStorage.removeItem("comments");




        showCommentsInUI();

    });



//ratingWithStars

const stars = document.querySelectorAll(".star");

stars.forEach((star, starIndex) =>{
    star.addEventListener("mouseover", () =>{
        highlightedStars(starIndex);
    });

    star.addEventListener("mouseout", () =>{
        unhighlightedStars();
    });

    star.addEventListener("click", ()=> {
        rateProduct(starIndex + 1);
    });
});

function highlightedStars(starIndex){
    for(let i = 0; i <= starIndex; i++){
        stars[i].classList.add("highlight");
    }
}

function unhighlightedStars(){
    stars.forEach((star) =>{
        star.classList.remove("highlight");
    });
}

function rateProduct(rating){
    console.log("Ürünü ${rating} yıldızla derecelendirdiniz.");
}


