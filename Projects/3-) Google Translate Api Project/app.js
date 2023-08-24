
//  Prototype, Ajax, and Callback  //

// Selecting Elements

const translatedWord = document.getElementById("word").value;
const translatedLanguage = document.getElementById("language").value;

const translate = new Translate(translatedWord, translatedLanguage);
const ui = new UI();

eventListeners();

function eventListeners(){
   document.getElementById("translate-form").addEventListener("submit", translationWord);     
        //  Change 

   document.getElementById("language").onchange = function(){
        //  UI Operations

     ui.changeUI();      
   }


}

function translationWord(e){

     translate.changeParameter(translatedWord, translatedLanguage);

     translate.translateWord(function(err, response){
          if(err){  //works as a "True" boolean value
               ui.showError(err);
          }
          else{
               ui.displayTranslate(response);
          }
     });

    e.preventDefault();
}


//   Warning   //

/* Yandex did not give me a Key because it stopped issuing free API Keys
I tried to use the API Key used by our teacher Mustafa Murat Coşkun.
but it may not work because of word translation is limited. */

//   Uyarı   //

/* Yandex ücretsiz API Key Vermeyi durdurduğu için bana Key vermedi bende 
Mustafa Murat Coşkun Hocamızın kullandığı API Key'i kullanmaya çalıştım
fakat kelime çevirisi sınırlı olduğu için çalışmama ihtimali yüksek olabilir. 
 */


