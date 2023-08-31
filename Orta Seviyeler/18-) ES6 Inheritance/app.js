
class Person{   //SuperClass, BaseClass
    constructor(name, age){
    this.name = name;
    this.age = age;
    }
    showInfos(){
        console.log("Name : " + this.name + " " + "Age : " + this.age);
    }
}
/* const person = new Person("Oğuzcan", 23)
console.log(person); */

class Employee extends Person{      //DerivedClass, SubClass, ChildClass
    constructor(name, age, salary){
      /*   this.name = name;
        this.age = age; */
        super(name, age);
        this.salary = salary;
    }
    showInfos(){    //Overriding
        console.log("Name : " + this.name + " " + "Age : " + this.age + " " + "Salary : " + this.salary);
    }
    toString(){     //Overriding
        console.log("Employee");
    }
    raiseSalary(amount){    //Extra
        this.salary += amount;
    }
}

const emp = new Employee("Oğuzcan", 23, 5000);

emp.raiseSalary(1000);

emp.showInfos();

emp.toString();

/* emp.showInfos();
console.log(emp);
 */






