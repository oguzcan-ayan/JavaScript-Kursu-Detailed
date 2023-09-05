
//  CommonJs Modules  //

// const app = require("./module1");

// console.log(app);

/* app.test1();
app.test2(); */

/* console.log(app.name);

app.test1();

console.log(app.person.name);
console.log(app.person.mail);
 */

//  ES6 Modules //

/* import { test,Person,employee,name } from "./module1";

Person.Test();

test();

console.log(employee);

console.log(name); */

import * as module1 from "./module1";

// console.log(module1);

console.log(module1.employee.salary);

module1.Person.Test();

/* import Trial from "./module1";  //Because we took as an default

Trial.trial(); */

import denemeVal from "./module1";

console.log(denemeVal);
