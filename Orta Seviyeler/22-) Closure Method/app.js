
/* function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        return count;
    }

    return innerFunction;
}

const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc()); */
/* 
function counter(){

    let count = 0;
    function setCount(){
        count++;
        return count;
    }

    return setCount;

}

const count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
 */

function counter(){
    let count = 0;
    function up(){

        count++;
        return count;
    }
    function down(){

        count--;
        return count;
    }

    return {
        up,     // up : up,         //  up : up(),
        down    // down : down      //  down : down()
    }

}

let count = counter();

console.log(count.up());        //  console.log(count.up);
console.log(count.up());
console.log(count.down());      //  console.log(count.down);
console.log(count.up());
console.log(count.up());
console.log(count.down());




