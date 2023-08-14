
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.getElementById("url");

//Starting UI Object
const ui = new UI();

//Loading all Events

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
}

function addFilm(e){
    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();


if(title === "" || director === "" || url === ""){
      //Error      
    ui.displayMessages("Please, fill all blanks...", "danger");


}
else{
    //New Film
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm);    //Add a new film to UI    

    ui.displayMessages("You filled all blanks, thank you...", "success");

}

    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}
