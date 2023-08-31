
/* const object = {
    test1 : function(){
        console.log("Test 1");
    },
    test2 : function(){
        console.log("Test 2");
    }

};

// console.log(object);


const employee = Object.create(object);     //Object.create() Method
employee.name = "Oğuzcan";
employee.age = 23;
console.log(employee);

 */

function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}

const person = new Person();

// console.log(person);



function Employee(name, age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("myTest");
}
const emp = new Employee("Oğuzcan", 23);

console.log(emp);


