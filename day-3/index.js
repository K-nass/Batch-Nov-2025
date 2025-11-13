"use strict"
//scopes

// global scope

var x = 1; // global scope
let y = 1;// global scope
const z = 1;// global scope


function testScope() {
    let text = "i am local"
    var test = "i am local"
    const test2 = "i am local"
    console.log(z);// can access any variables out side function
}

// console.log(text);//can not access text it is function scope


testScope() //1



// Block Scope
if (true) {
    var notBlockScope = "not block scope"
}
console.log(notBlockScope);//"not block scope"

if (true) {
    let blockScope = "block scope"
}

// console.log(blockScope);ReferenceError: blockScope is not defined 

var name = "karim"
// console.log(window.name);//karim

let name2 = "karim"
// console.log(window.name2);//undefined if you use node to show logs will be error window is not defined cause the global object of node js named guess what?"global"

// p = "test"
//console.log(p);//ReferenceError: p is not defined ,update i added use strict to top of page

//f = 'hamada'//ReferenceError: f is not defined
testUseStrict()
function testUseStrict() {
    // console.log(f);
}

// function vs arrow function
function normal() {
    console.log(this);//undefined because we are in strict mood , without strick mood will be window
}

const arrow = () => {
    console.log(this);//window in strict mood or without strict mood, it is inherit from where they were defined and i am define this function in global scope
};

normal(); // 'this' depends on how the function is called
arrow();  // 'this' is inherited from outer scope



function sayHello() {
    console.log(this);//undefined  remember  we use strict mood 
}

sayHello()

const obj = {
    name: "kareem",
    sayBye: function () {
        console.log(this);//{name: 'kareem', sayBye: ƒ}
    }
}

obj.sayBye()

const obj2 = {
    name: "kareem",
    sayBye: () => {
        console.log(this);//window  i dont have my own this so what is outer function scope it is window scope so i will inherit it
    }
}
obj2.sayBye()


// what arrow function solve ?

const obj3 = {
    age: 15,
    greet: function () {
        setTimeout(function () {
            console.log(this.age); //undefined the inner function has its own this, not obj3.
        }, 1000);
    }
};
obj3.greet();


const obj4 = {
    age: 15,
    greet: function () {
        setTimeout(() => {
            console.log(this.age);//arrow functions inherit this from the outer scope
        }, 1000)
    }
}

obj4.greet()


// closure

function outer() {
    let name = "karim";
    function inner() {
        console.log("from inner", name);//karim
    }
    return inner
}
// outer() is done, inner() remembers name — that’s a closure.
const inner = outer();
inner()


function setCount() {
    let count = 0;
    return function () {
        count++
        return count;
    }
}
let counter = setCount()
console.log("counter", counter());//1
console.log("counter", counter());//2

// same as if you use it without closure but the deference we save our data private not global



function counter3() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    };
}

//count only accessible only from returned function 
const myCounter = counter3();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.reset());     // 0

//once - if employee must increase his salary in year only once what we do?
// the variable isIncreased is inside increaseSalaryControl(), but the returned function still remembers it after increaseSalaryControl() finishes this is closure
function increaseSalaryControl(fn) {
    let isIncreased = false;
    return function(){
        if (!isIncreased) {
            isIncreased = true
            return fn()
        } else {
            throw new Error("the employee salary already increased");
            
        }
    }
}

function increaseSalary() {
    console.log('the salary increased');
}

const karimSalary = increaseSalaryControl(increaseSalary);
karimSalary()
karimSalary()//Error: the employee salary already increased



