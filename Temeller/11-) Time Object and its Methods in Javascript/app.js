let value;

const now = new Date();     //It shows us present time(now) 
value = now;

const date1 = new Date("7-24-2014 08:26:34");
const date2 = new Date("August 10 2000");
const date3 = new Date("7/26/2014");

console.log(date1);

value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();         //  Get a value
value = date1.getSeconds();
value = date1.getMilliseconds();
value = date1.getFullYear();

date1.setMonth(9);
date1.setDate(11);

date1.setFullYear(2020);
date1.setHours(2);
date1.setMinutes(23);               //  Set a value
date1.setSeconds(38);   
date1.setMilliseconds(0);

value = date1;
console.log(value);







