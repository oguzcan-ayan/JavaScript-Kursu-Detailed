let value;

const programmer = {
    name : "Oğuzcan",
    age : 23,
    email : "oguzcanayan43@gmail.com",
    langs : ["Python", "Java", "Javascript", "C#", "Html", "Css"],
    address : {
        city : "Corum",
        village : "Sungurlu"
    },
    work : function(){
        console.log("The programmer is running...");
    }
}   

value = programmer;
value = programmer.email;   //Generally used
//value = programmer["email"];

value = programmer.langs[1];
value = programmer.address.city;

value = programmer.work();


const programmers = [
    {name : "Oğuzcan Ayan", age : 23},
    {name : "Beyza Betül Ayan", age : 19}
];

value = programmers;
value = programmers[0].name;
console.log(value);


