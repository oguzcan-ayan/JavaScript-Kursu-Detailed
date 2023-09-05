
const person = {

    age : 25,

  /*   tellAge : function(){
        //This-object
        console.log(this.age);
        console.log(this);
    } */

   /*  tellAge : function(){    //Bind
        //This-window
        console.log(this.age);
        console.log(this);
    }.bind(this)
     */

    tellAge : () => {       //Arrow Function
        console.log(this.age);
        console.log(this);
    }


    //This-window

}

person.tellAge();















