   
/* console.log(this); */       //Global Scope

/* 
const emp1 = {  //Object Literal
    name : "Oğuzcan",
    age : 23,
    showInfos: () => console.log("Informations are now being displayed")
};

const emp2 = {
    name : "Beyza Betül",
    age : 19
};

emp1.showInfos();
emp1.salary = 4000;
console.log(emp1);
// console.log(emp2);

 */

function Employee(name, age, salary){    //Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = () => console.log(this.name, this.age, this.salary);  

  /*   console.log(this); */
}
const emp1 = new Employee("Oğuzcan", 23, 4000);
const emp2 = new Employee("Beyza Betül", 19, 3000);

/* console.log(emp1);
console.log(emp2);

 */
emp1.showInfos();
emp2.showInfos();











