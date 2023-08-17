
//  Static Methods  //

class Mathematic {
    static cube(x){
       return x * x * x; 
    }
        square(x){
        console.log(x * x);    
        }
}

const math = new Mathematic();

math.square(4);
// Mathematic.square(4);    It's wrong method

console.log(Mathematic.cube(4));
// math.cube(4);    It's wrong method

// Object.create();     create is a static method

// console.log(Math.sqrt(4));   sqrt is a static method   








