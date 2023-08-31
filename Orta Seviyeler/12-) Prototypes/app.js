/* 
const object = new Object();   //Object Literal
const object2 = new Object();

object2.name = "Oğuzcan";
console.log(object2);

 */

/* function Employee(name, age){
    this.name = name;
    this.age = age;
    this.showInfos = () => console.log("Informations are now being displayed...");
    this.toString = () => console.log("This is an Employee Object");
}

const emp1 = new Employee("Oğuzcan", 25);

emp1.showInfos();
console.log(emp1);
emp1.toString();
 */

/* console.log(emp1.toString()); */


////////////////////////////////////////////////////////


function Employee(name, age){
    this.name = name;
    this.age = age;
    
}

Employee.prototype.showInfos = function(){
    console.log("Name : " + this.name + " " + "Age : " + this.age);
}

const emp1 = new Employee("Oğuzcan", 23);
const emp2 = new Employee("Beyza Betül", 19);

emp1.showInfos();
emp2.showInfos();

console.log(emp1);
console.log(emp2);
