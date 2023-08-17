
//  Classes //

//Syntactic Sugar

/* 
function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function(){
    console.log("Name : " + this.name + " " + "Age : " + this.age + " " + "Salary : " + this.salary);

}

const emp = new Employee("Oğuzcan", 23, 5000);

console.log(emp);
 */

class Employee {    //Class
    constructor(name, age, salary){     //Constructor
        this.name = name;
        this.age = age;
        this.salary = salary;
    }   
    showInfos(){
        console.log("Name : " + this.name + " " + "Age : " + this.age + " " + "Salary : " + this.salary);
    }
}

const emp = new Employee("Oğuzcan", 23, 5000);

emp.showInfos();
console.log(emp);


