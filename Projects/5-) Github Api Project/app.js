
//  Async and Await //

// Selecting Elements

const githubForm = document.getElementById("github-form");
const githubNameInput = document.getElementById("github-name");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){

    githubForm.addEventListener("submit", getGitData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);

}

function getGitData(e){

    let username = githubNameInput.value.trim();

    if(username === ""){
        alert("Please enter a username!")
    }
    else{
        github.getGitHubData(username)
        .then(response => {
            if(response.user.message || response.repo.message === "Not Found"){
                //Error Message

                console.error("An error has occurred.");
            }
            else{
                ui.showUserInfo(response.user);
            }

        })
        .catch(err => console.log(err));
    }

    ui.clearInput();    //Clearing input
    e.preventDefault();
}

function clearAllSearched(){
    //Clear all of the searched elements

}

function getAllSearched(){
    //Get all of the searched elements from Storage to add to the UI



}

