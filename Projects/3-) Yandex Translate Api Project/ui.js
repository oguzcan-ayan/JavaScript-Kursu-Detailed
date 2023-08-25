
function UI(){

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");

}

UI.prototype.changeUI = function(){
    //  Change UI

    this.outputImage.src = `images/${this.languageList.value}.png`;
     /* this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;  
     This is also okay for the below one */
    this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent;

}

UI.prototype.displayTranslate = function(word){

    this.outputWord.textContent = word;

}

UI.prototype.showError = function(){

    

}











