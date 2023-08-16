function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();
    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
        let films = this.getFilmsFromStorage();
        //splice
        films.forEach(function(film, index){
            if(film.title === filmTitle){
                films.splice(index, 1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
}

//Local storage 'deki değerler sadece string olarak tutulur. eğer obje türünde bir değeri
//local storage 'de tutmak istersek JSON.stringify() ile stringe çevirmek zorundayız.
//local storage 'deki değeri geri çağırdığımızda ise JSON.parse() ile obje tipine geri çeviririz.

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}






