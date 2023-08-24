
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
        ui.showError("Please enter a username!");
    }
    else{
        github.getGitHubData(username)
        .then(response => {
            if(response.user.message || response.repo.message === "Not Found"){
                //Error Message

                ui.showError("The user has not been found.");
            }
            else{ 
                ui.addSearchedUsersToUI(username);
                Storage.addSearchedUsersToStorage(username);
                ui.showUserInfo(response.user);
                ui.showUser("The user has been added");
                ui.showRepoInfo(response.repo);
            }
            
        })
        .catch(err => ui.showError(err));
    }

    ui.clearInput();    //Clearing input
    e.preventDefault();
}

function clearAllSearched(){
    //Clear all of the searched elements

    if(confirm("Are you sure deleting all users?")){
        Storage.clearAllSearchedUsersFromStorage(); //Clear From Storage
        ui.clearAllSearchedUsersFromUI();   //Clear From UI
    }


}

function getAllSearched(){
    //Get all of the searched elements from Storage to add to the UI

    let users = Storage.getSearchedUsersFromStorage();
    let result;
    users.forEach(function(user){
        result += `<li class="list-group-item">${user}</li>`; 

    });

    lastUsers.innerHTML = result;
}

