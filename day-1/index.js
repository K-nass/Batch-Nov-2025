// Primitives

//string
const text = "welecome"

//number
const x = 15;
const y = 1.5;

console.log(typeof NaN); //number 

console.log(0 / 0); //NaN
console.log(undefined / 0);//NaN
console.log("string" * 5); //NaN

console.log(isNaN(1));//false 
console.log(isNaN("1"));//false because type coercion , javascript tries to convert to number then check the result 
console.log(isNaN("text"));//true it is not a number

//Boolean 
// true or false
console.log(1 == 1);//true
console.log(1 === "1");//false It checks both value and type — no type conversion happens.

// BigInt
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);//9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2);//9007199254740992 should be 9007199254740993
console.log("big int", 9999999999999999n + 1n);//10000000000000000n

//Symbol
//  that's guaranteed to be unique
console.log("result of symbol",Symbol("id") === Symbol("id"));//false

const salary = Symbol("salary")
const formUserData = {name:"karim", [salary] : 100000000}
console.log(formUserData.salary);//undefined it is hidden hat won’t accidentally get overwritten.
console.log(formUserData[salary]);//100000000


//Type Coercion
// JS can convert between types automatically.
console.log("15" + 2); //152 string - concatenation
console.log("5" - 2);//3  subraction forces numaric converstion 
console.log(Number("15")); //15
console.log(Number("text"));//NaN

console.log(Boolean(""));//false falsy value
console.log(Boolean(0));//false falsy value
console.log(0 == false);//true loose equality performs coercion
console.log(0 === false); //false strict equality checks type

// variables: var, let, const

//Var
//Hoisted and initialized as undefined
console.log(k);//undefined
var k = 5;
var k = 10;
console.log(k); //10 can redeclare 

//Let
// console.log(b); hosted but not initialized
let b = 5;
// let b = 100; cant redclare 
b = 10;
console.log(b); //10 can reassign 

//Const 
//same as let for hosting case but the defferance is you can not reassign it constant

//Hosting for functions 
greating();//hello
function greating() {
    console.log("hello");
}













