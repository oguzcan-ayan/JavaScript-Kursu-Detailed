//  HTTP Requests with Promise and Fetch  //

class Request {

    //  GET Request  //

    get(url){  
        return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
        })
        
    }

    //  POST Request  //

    post(url, data){
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // PUT Request  //

    put(url, data){
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method : "PUT",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
        
    }   

    //  PATCH Request   //

    patch(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : "PATCH",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })

    }

    //  DELETE Request  //

    delete(url){
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method : "DELETE"
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

}

const request = new Request();

    //  GET //

/* request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums);
})
.catch(err => {
    console.log(err);
}) */

// console.log(albums); Asynchronous State (It prints out "undefined")

    //  POST  //

/* request.post("https://jsonplaceholder.typicode.com/albums",{userId : 5, title : "Iron Man"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err)) */

    //  PUT //

/* request.put("https://jsonplaceholder.typicode.com/albums/7", {userId : 3, title : "Oğuzcan"})
.then(updateResponse => console.log(updateResponse))
.catch(err => console.log(err)) */

    //  PATCH   //

/* request.patch("https://jsonplaceholder.typicode.com/albums/8", {title : "The Maze"})
.then(partialUpdateResponse => console.log(partialUpdateResponse))
.catch(err => console.log(err)) */

    //  DELETE  //

request.delete("https://jsonplaceholder.typicode.com/posts/1")
.then(message => console.log(`Deleting data operation has done successfully ${message}`))
.catch(err => console.log(err))



