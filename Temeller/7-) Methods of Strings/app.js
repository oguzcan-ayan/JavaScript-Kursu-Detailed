let value;

const firstName = "Oğuzcan";
const lastName = "Ayan";

const langs = "Html, Css, Bootstrap, Tailwind, Javascript, React";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Oğuzcan Ayan ";
value += "Ayan";    //  value = value + "Ayan";

value = firstName.length;
value = firstName.concat(" ", lastName, " ", "Hello");  //  value = firstName + " " + ......

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[3];
value = firstName[0];
value = firstName[firstName.length - 1];

//Index Of
value = firstName.indexOf("O");
value = firstName.indexOf("c");
value = firstName.indexOf("A");

//Char at
value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

//Split
value = langs.split(",");

//Replace
value = langs.replace("Css", "C#");

//Includes
value = langs.includes("Html");
value = langs.includes("Angular");

console.log(value);