
class Storage {

    static getSearchedUsersFromStorage(){
        //All of the Users from Storage

        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;

    }

    static addSearchedUsersToStorage(username){
        //Add Users to Storage

        let users = this.getSearchedUsersFromStorage();

        if(users.indexOf(username) === -1){
            users.push(username);
            localStorage.setItem("searched", JSON.stringify(users));
        }
    }

    static clearAllSearchedUsersFromStorage(){
        //Clear Users From Storage
        localStorage.removeItem("searched");
    }
}

















