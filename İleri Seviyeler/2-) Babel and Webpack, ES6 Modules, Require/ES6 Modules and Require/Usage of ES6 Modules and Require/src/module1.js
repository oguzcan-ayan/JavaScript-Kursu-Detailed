
//  Require //

/* 
module.exports.test1 = function test1(){

    console.log("Test 1");

}

module.exports.test2 = function test2(){

    console.log("Test 2");
} */

/* module.exports = {
    name : "Oğuzcan",
    test1 : function(){
        console.log("Test 1");
    },
    person : {
        name : "Beyza Betül",
        mail : "something@hotmail.com" 
    } 
}; */

//  ES6 Modules //

export const name = "Oğuzcan";

export function test(){
    console.log("Test Function");
}

export class Person{

    static Test(){
        console.log("Person Test");
    }

}

export const employee = {

    name : "Beyza Betül",
    salary : 4000,

};

/* export default class Trial {
    static trial(){
        console.log("Default Trial");
    }

} */

const trialValue = "Trial Value";

export default trialValue;
