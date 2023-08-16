
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");

//Starting UI Object
const ui = new UI();

//Produce a Storage Object
const storage = new Storage();

//Loading all Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadFilms);
    secondCardBody.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", clearAllFilms);
}

function loadFilms(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
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

    storage.addFilmToStorage(newFilm);

}

    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        ui.displayMessages("Deleting operation has been done successfully", "success");
    }
}

function clearAllFilms(){

    if(confirm("Are you sure deleting all films?")){
        ui.displayMessages("You have deleted all films...", "success");
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}


