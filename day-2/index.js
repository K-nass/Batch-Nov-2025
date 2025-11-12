// control flow
let degree = 90
if (degree > 90) {
    console.log("A");
} else {
    console.log("below A");
}

const degree2 = 90;
switch (degree2) {
    case "90":
        console.log("A");
        break;
    case "80":
        console.log("B");
        break;
    default:
        console.log("below B");
}

// Arrays
const fruits = ["apple", "banana"];
const numbers = [1, 2, 3, 4];
fruits.push("cherry");
console.log(fruits[1]); // banana
console.log(fruits.length);//3 length is 3 after pushing note push is mutable method means its change the orgnal array
console.log(fruits.toString());//apple,banana,cherry
console.log(fruits.at(1));  // "banana"
console.log(fruits.at(-1)); // "cherry"
console.log(fruits.join(" - ")); // "apple - banana - cherry"
const last = fruits.pop();
console.log("after remove element from last", fruits.length);//2 its mutable too like push
console.log(last);   // "cherry" 
console.log(fruits); // ["apple", "banana"]

const first = fruits.shift();
console.log("after remove element from first", fruits.length);//2 its mutable too like push , pop
console.log(first);   // "apple"
console.log(fruits);  // ["banana", "kiwi"]

fruits.unshift("mango"); //mutable
console.log(fruits); // ["mango", "banana", "kiwi"]

delete fruits[1];
console.log("alert", fruits); // ["mango", <1 empty item>] logs empty item in node server but in the browser will be undefiend , so bad never use it

const all = fruits.concat(numbers);//non-mutable
console.log(all);//[ 'mango', <1 empty item>, 1, 2, 3, 4 ]

const nestedArr = [1, 2, [1, 2, [1, 2, 3, [1, 2, 3]]]];
console.log(nestedArr.flat(2)); //flat it takes argument optional very useful to control how “deep” the flattening goes, [ 1, 2, 1, 2, 1, 2, 3, [ 1, 2, 3 ] ]

console.log(typeof fruits);//object
// how i know the type of array is using isArray
console.log(Array.isArray(fruits));//true
console.log(fruits.slice(0, 2));//[ 'mango', <1 empty item> ] non-mutable)

// array.splice(start, deleteCount, item1, item2, ...)
console.log(fruits.splice(1, 1));//[ <1 empty item> ] //mutable
console.log(fruits);//[ 'mango' ]
// JavaScript Array Iterations

let text = "";
fruits.forEach(addDollarSign);
function addDollarSign(value) {
    text += value + "$"
    return value + "$"
}
console.log(text);
const fruitsWithDollarSign = fruits.map(addDollarSign)
console.log(fruitsWithDollarSign);//[ 'mango$' ] 

const numbersOne = [1, 2, 3, 4];
console.log(numbersOne.map(number => number * 2));//[ 2, 4, 6, 8 ]

const users = [{ name: "karim", gender: "man" },
{ name: "sara", gender: "women" }
];
console.log(users.filter(user => user.gender !="women"));//[ { name: 'karim', gender: 'man' } ]

const sum = numbers.reduce((total, value) => total + value) //total will be numbers[0] ,starts iteration at index 1 (second element)
const sum2 = numbers.reduce((total, value) => total + value, 0);//initialValue = 0, this is better why? because its safer for empty arrays
console.log(sum);//10
console.log(sum2);//10























