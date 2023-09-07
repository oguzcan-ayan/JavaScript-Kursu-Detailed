
const buttons = document.querySelectorAll("#buttons button");
const result = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener("click", calculate);
})

function calculate(){
    let value = this.innerHTML;
    
    if(value === "="){
        try{
            result.value = eval(result.value);
        }
        catch(e){
            result.value = "0";
        }
        return;
    }

    if(value === "C"){
        result.value = "";
        return;
    }
    
    result.value += value;


}










