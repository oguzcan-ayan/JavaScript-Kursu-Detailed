
//  Http Status'   //

// 200 : OK
// 403 : Forbidden
// 404 : Not found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest.

// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function(){

    //XmlHttpRequest(XHR)

    const xhr = new XMLHttpRequest();

    // console.log(xhr);
    // console.log(typeof xhr);
    
    xhr.onprogress = function(){
        console.log("Process is processing...", this.readyState);
    }

    xhr.onload = function(){

        if(this.status === 200){

            document.getElementById("ajax").textContent = this.responseText;

            // console.log(this.responseText);
        }

        // console.log(this.readyState);
        // console.log(this.status);
    }

   /*  xhr.onreadystatechange = function(){

        if(this.status === 200 && this.readyState === 4){   //Response is ready
            console.log(this.responseText);
        }

        console.log(this.readyState);
        console.log(this.status);

    }
 */

    xhr.open("GET", "example.txt", true);
    xhr.send();

});














