
const span = document.getElementById("seconds");

let seconds = 10;

const counter = () => {

    if(seconds > 0){
        seconds -= 1;
        span.innerText = seconds;
    }
    else{
        //  Finish
      clearInterval(countdown);
    }

}

let countdown = setInterval(counter, 1000);

document.addEventListener("visibilitychange", function(){
    
        if(document.visibilityState === "visible"){
            countdown = setInterval(counter, 1000);
        }
        else{
            clearInterval(countdown);
        }
});









