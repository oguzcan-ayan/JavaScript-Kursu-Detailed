//Ajax, Callback and HTTP Requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //  GET Request //

/* 
    //First Method  (assignment)
    get(url){
        this.xhr.open("GET", url);  //Connection is open
        const temp = this;
        console.log(temp);
        this.xhr.onload = function(){
            if(temp.xhr.status === 200){
                console.log(temp.xhr.responseText);
            }
        }

        this.xhr.send();
    } */

   
/*
    //Second Method (bind)
    get(url){
        this.xhr.open("GET", url);  //Connection is open
        
        this.xhr.onload = function(){
            if(this.xhr.status === 200){
                console.log(this.xhr.responseText);
            }
        }.bind(this)

        this.xhr.send();
    }  */
    
    //Third Method  (arrow function)

    get(url, callback){
        this.xhr.open("GET", url);  //Connection is open
        
        this.xhr.onload = () =>{
            //Success state
            if(this.xhr.status === 200){
            callback(null, this.xhr.responseText);    //Our request has finished
            }
            else{
            //Error State
            callback("GET : An error has occurred.", null);
            }
        }
           
        this.xhr.send();
    } 

        //  POST Request  //

    post(url, data, callback){
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json");  //JSON Data Type
        this.xhr.onload = () => {
            if(this.xhr.status === 201){
            //Success state
            callback(null, this.xhr.responseText);
            }
            else{
            //Error state
            callback("POST : An error has occurred.", null);
            }

        }

        this.xhr.send(JSON.stringify(data));
    }
    
        //  PUT Request //

        put(url, data, callback){
            this.xhr.open("PUT", url);
            this.xhr.setRequestHeader("Content-type", "application/json");  //JSON Data Type
            this.xhr.onload = () => {
                if(this.xhr.status === 200){
                //Success state
                callback(null, this.xhr.responseText);
                }
                else{
                //Error state
                callback("PUT : An error has occurred.", null);
                }
    
            }
    
            this.xhr.send(JSON.stringify(data));
        }   
        
        //  DELETE Request //

        delete(url, callback){
            this.xhr.open("DELETE", url);  //Connection is open
            
            this.xhr.onload = () =>{
                //Success state
                if(this.xhr.status === 200){
                callback(null, `It has been deleted ${this.xhr.responseText}`);    //Our request has finished
                }
                else{
                //Error State
                callback("DELETE : An error has occurred.", null);
                }
            }
               
            this.xhr.send();
        } 

}

const request = new Request();

    // GET //

/* request.get("https://jsonplaceholder.typicode.com/albums", function(err, response){
    if(err === null){
        //Success
        console.log(response);
    }
    else{
        //Error
        console.log(err);
    }
});
 */
/* request.get("https://jsonplaceholder.typicode.com/albums/55", function(err, response){
    if(err === null){
        //Success
        console.log(response);
    }
    else{
        //Error
        console.log(err);
    }
});
 */
// request.get("https://jsonplaceholder.typicode.com/albums");

// console.log(request);

    //  POST  //

/* request.post("https://jsonplaceholder.typicode.com/albums", {userId : 5, title : "Avengers"}, function(err, album){
    if(err === null){
        //Success
        console.log(album);
    }
    else{
        //Error
        console.log(err);
    }
}); */

    //  PUT //

/* request.put("https://jsonplaceholder.typicode.com/albums/5", {userId : 83, title : "Fast and Furious 5"}, function(err, album){
    if(err === null){
        //Success
        console.log(album);
    }
    else{
        //Error
        console.log(err);
    }
}); */

    // DELETE  //

request.delete("https://jsonplaceholder.typicode.com/albums/8", function(err, response){
    if(err === null){
        //Success
        console.log(response);
    }
    else{
        //Error
        console.log(err);
    }
});






