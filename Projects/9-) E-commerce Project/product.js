//header-scroll
const titleScroll = document.getElementById("title-scroll");

window.addEventListener("scroll", function() {
  if (titleScroll) {
    if (this.scrollY >= 350 && !titleScroll.className.includes("active")) {
      titleScroll.classList.add("active");
    } else if (this.scrollY < 350 && titleScroll.className.includes("active")) {
      titleScroll.classList.remove("active");
    }
  }
});

//searchbox-click
const searchbox = document.querySelector("#searchbox");

searchbox.addEventListener("click", () => {
  searchbox.classList.add("boxColor");
});

//add-show-comments
const commentAdd = document.getElementById("comment-form-add");
const showComments = document.getElementById("show-comments");
const commentDelete = document.getElementById("delete-comment-button");

let comments;

if (localStorage.getItem("comments") === null) {
  comments = [];

} else {
  comments = JSON.parse(localStorage.getItem("comments"));
}


function showCommentsInUI() {
  showComments.innerHTML = "";
  if (JSON.parse(localStorage.getItem("comments"))) {
    JSON.parse(localStorage.getItem("comments"))
      .map(comment => {
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
  comments.push({ name, comment });

  localStorage.setItem("comments", JSON.stringify(comments));

  showCommentsInUI();

  nameInput.value = "";
  commentInput.value = "";
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


function writeStars() {
  let localStar = JSON.parse(localStorage.getItem("stars"));

  stars.forEach((star, starIndex) => {
    if (starIndex <= localStar) {
      star.innerHTML = `<i class="fa-solid fa-star"></i>`;
    } else {
      star.innerHTML = `<i class="fa-regular fa-star"></i>`;
    }
  });

  document.getElementById("star-point").textContent = (localStar + 1).toFixed(1);
}

stars.forEach((star, starIndex) => {

  star.addEventListener("mouseover", (e) => {
    let starIndexNumber = starIndex;
    if (e.currentTarget.children[0].classList.contains("fa-regular")) {
      if (starIndexNumber > 0) {
        stars.forEach((star, starIndex) => {
          if (starIndex <= starIndexNumber) {
            if (star.children[0].classList.contains("fa-regular")) {
              star.innerHTML = `<i class="fa-solid fa-star"></i>`;
            }
          }
        });
      }
      e.currentTarget.innerHTML = `<i class="fa-solid fa-star"></i>`;
    } else {
      stars.forEach((star, starIndex) => {
        if (starIndex > starIndexNumber) {
          if (star.children[0].classList.contains("fa-solid")) {
            star.innerHTML = `<i class="fa-regular fa-star"></i>`;
          }
        }
      });
    }
    document.getElementById("star-point").textContent = (starIndexNumber + 1).toFixed(1);
  });

  star.addEventListener("mouseout", (e) => {
    let starIndexNumber = starIndex;
    if (!localStorage.getItem("stars")) {
      if (e.currentTarget.children[0].classList.contains("fa-solid")) {
        if (starIndexNumber > 0) {
          stars.forEach((star, starIndex) => {
            if (starIndex <= starIndexNumber) {
              if (star.children[0].classList.contains("fa-solid")) {
                star.innerHTML = `<i class="fa-regular fa-star"></i>`;
              }
            }
          });
        }
        e.currentTarget.innerHTML = `<i class="fa-regular fa-star"></i>`;
      }
    } else {
      writeStars();
    }

  });

  star.addEventListener("click", () => {
    let starIndexNumber = starIndex;
    localStorage.setItem("stars", JSON.stringify(starIndexNumber));
    writeStars();
  });
});

function highlightedStars(starIndex) {
  for (let i = 0; i <= starIndex; i++) {
    stars[i].classList.add("highlight");
  }
}

function unhighlightedStars() {
  stars.forEach((star) => {
    star.classList.remove("highlight");
  });
}

/* function rateProduct(rating) {
  console.log("Ürünü ${rating} yıldızla derecelendirdiniz.");
} */

//add-remove-product-from-basket
function decreaseProduct() {
  if (localStorage.getItem("product") && JSON.parse(localStorage.getItem("product")).productNumber > 0) {
    let product = JSON.parse(localStorage.getItem("product"));
    localStorage.setItem("product", JSON.stringify(
      { productName: document.querySelector(".bargello-parfume h1 span").textContent, productNumber: product.productNumber - 1 }
    ));
    writeLocalStorage();
  }
}

function increaseProduct() {
  if (localStorage.getItem("product")) {
    let product = JSON.parse(localStorage.getItem("product"));
    localStorage.setItem("product", JSON.stringify(
      { productName: document.querySelector(".bargello-parfume h1 span").textContent, productNumber: product.productNumber + 1 }
    ));
    writeLocalStorage();
  }
}


function writeLocalStorage() {
  let content = document.getElementById("basketContent");
  if (localStorage.getItem("product")) {
    let product = JSON.parse(localStorage.getItem("product"));
    content.innerHTML = `
    <div class="basket-content">
     <h1>Ürün Adı : ${product.productName}</h1>
     <span>Adet : ${product.productNumber}</span>
     <button onclick="decreaseProduct()">-</button>
     <button onclick="increaseProduct()">+</button>
    </div>
    `;
  }
}

document.getElementById("add-to-basket")
  .addEventListener("click", function() {

    document.getElementById("add-to-basket").innerHTML = `Sepete Eklendi`;
    document.getElementById("add-to-basket").setAttribute('style', 'color: white;');

    if (localStorage.getItem("product")) {
      let product = JSON.parse(localStorage.getItem("product"));

      localStorage.setItem("product", JSON.stringify(
        { productName: document.querySelector(".bargello-parfume h1 span").textContent, productNumber: product.productNumber + 1 }
      ));
    } else {
      localStorage.setItem("product", JSON.stringify(
        { productName: document.querySelector(".bargello-parfume h1 span").textContent, productNumber: 1 }
      ));
    }

    if (!document.getElementById("basketContent")
      .classList
      .contains("active")) {
      document.getElementById("basketContent")
        .classList
        .add("active");
    }


    writeLocalStorage();
  });

document.getElementById("basket")
  .addEventListener("click", function() {

    if (!localStorage.getItem("product")) {
      document.getElementById("basketContent").innerHTML = `<span>Sepetiniz Boş !</span>`;
    }

    document.getElementById("basketContent")
      .classList
      .toggle("active");

  });

writeLocalStorage();
writeStars();

//go-top-page
const goUp = document.getElementById("up-button");

goUp.addEventListener("click", e => {
  e.preventDefault();
  document.body.scrollIntoView({
    behavior: "smooth"
  });
});

//Zooming

const zoom = document.querySelector("input[type=\"range\"]");

zoom.addEventListener("input", e => {
  document.documentElement.style.setProperty("--zoom", Number(e.target.value));
});