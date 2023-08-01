const name = "Oğuzcan Ayan";
const department = "Computer Engineer";
const salary = 5000;

//const a = "Name : " + name + "\n" + "department : " + department + "\n" + "salary : " + salary + "$";

//const a = `Name : ${name} \nDepartment : ${department} \nSalary : ${salary}`
//console.log(a);
/* 
const html = "<ul>" +
            "<li>" + name + "</li>" +
            "<li>" + department + "</li>" + 
            "<li>" + salary + "</li>" +
"</ul>";
 */
function a() {
    return "Hello";
}
const html = `<ul>
            <li>${name}</li>              
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 3}</li>
            <li>${a()}</li>
</ul>`;


document.body.innerHTML = html;



