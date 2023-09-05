
document.getElementById("change").addEventListener("click", change);

function change(){

    const xhr = new XMLHttpRequest();


    xhr.open("GET", "https://v6.exchangerate-api.com/v6/d02be2b931ff39f6d1e4ce19/latest/USD");

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);
            // console.log(response.conversion_rates.TRY);
            // console.log(typeof document.getElementById("amount").value);

            const rate = response.conversion_rates.TRY;
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = amount * rate;
            
            // console.log(amount * rate);
        }
    }
    xhr.send();
}
















