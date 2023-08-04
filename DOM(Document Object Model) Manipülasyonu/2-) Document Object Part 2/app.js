let value;

value = document;

//  Scripts

value = document.scripts;

value = document.scripts.length;
value = document.scripts[0];

//  Links
value = document.links;
value = document.links[0];
value = document.links[document.links.length - 1];
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("href");
value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;

//  Forms
value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"]; //according to the name attribute
value = document.forms.form;
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");
value = document.forms[0].method;   //  Default value is get 
value = document.forms[0].className;

console.log(value);






