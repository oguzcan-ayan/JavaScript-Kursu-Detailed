
function getTextFile(){ //Text File


    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}
// getTextFile();

function getJsonFile(){ //JSON File

    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// getJsonFile();

function getExternalAPI(){

    fetch("https://v6.exchangerate-api.com/v6/d02be2b931ff39f6d1e4ce19/latest/USD")
    .then(response => response.json())
    .then(data => console.log(data.conversion_rates.TRY))
    .catch(err => console.log(err))
}

getExternalAPI();








