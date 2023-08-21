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




    //  PATCH Request   //






    //  DELETE Request  //


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

request.post("https://jsonplaceholder.typicode.com/albums",{userId : 5, title : "Iron Man"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err))

    //  PUT //



    //  PATCH   //



    //  DELETE  //

