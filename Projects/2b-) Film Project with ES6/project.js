
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");


//Loading all Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadFilms);
    secondCardBody.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", clearAllFilms);
}

function loadFilms(){
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
}

function addFilm(e){
    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();


if(title === "" || director === "" || url === ""){
      //Error      
    UI.displayMessages("Please, fill all blanks...", "danger");


}
else{
    //New Film
    const newFilm = new Film(title, director, url);

    UI.addFilmToUI(newFilm);    //Add a new film to UI    

    UI.displayMessages("You filled all blanks, thank you...", "success");

    Storage.addFilmToStorage(newFilm);

}

    UI.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        UI.displayMessages("Deleting operation has been done successfully", "success");
    }
}

function clearAllFilms(){

    if(confirm("Are you sure deleting all films?")){
        UI.displayMessages("You have deleted all films...", "success");
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}


