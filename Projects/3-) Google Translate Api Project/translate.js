
function Translate(word, language){
    this.apiKey = "7ff13ec0f0msheabe98b6a172545p1e088cjsnc450aafe9c17";
    this.word = word;
    this.language = language;

    //  XHR Object

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(){

    //  Ajax Operations

    const endpoint = "https://google-translate1.p.rapidapi.com/language/translate/v2"


 /*    body: new URLSearchParams({
		q: 'Hello, world!',
		target: 'es',
		source: 'en'
	}) */
};




















