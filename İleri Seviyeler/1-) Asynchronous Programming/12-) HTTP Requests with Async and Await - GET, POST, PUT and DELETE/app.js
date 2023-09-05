//  HTTP Requests with Async and Await  //

class Request {

    //  GET Request  //

    async get(url){  
       
        const response = await fetch(url);  //  Response Object
        
        const data = await response.json(); //  Json Object

        return data;
    }

    //  POST Request  //

    async post(url, data){

        const response = await fetch(url, {     // Response Object
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });

        const responseData = await response.json();     // Json Object

        return responseData;
            
    }

    // PUT Request  //

    async put(url, data){

        const response = await fetch(url, {     //  Response Object
            method : "PUT",
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
            
        const responseData = await response.json();     //  Json Object

        return responseData;
    }   

    //  PATCH Request   //

    async patch(url, data){
        
        const response = await fetch(url, {     //  Response Object
            method : "PATCH",
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });

        const responseData = await response.json();   //  Json Object

        return responseData;

    }

    //  DELETE Request  //

    async delete(url){
    
    const response = await fetch(url, {     //  Response Object
        method : "DELETE"
    });        
        
    const data = await response.json();     //  Json Object

        return `Deleting data operation has done successfully ${data}`;
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
.then(message => console.log(message))
.catch(err => console.log(err))


















