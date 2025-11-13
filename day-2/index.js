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

// objects
const user = {name:"karim", language:"English"}

const user2 = {}
user2.name = "karim"
user2.language = "arabic"
user2.getName = function() {
    return this.name
}

console.log("user2",user2.getName());//karim


//same as object literal 
const user3  = new Object({
    name:"karim",
    language:"arabic"
})
console.log(user3.name);//karim

console.log(user3["name"]);//karim useful for field you dont know yet somting dynimc 


const user4 = {
    name:"karim",
    language:"arabic",
    getNameAndLanguage:function(){
        return name + " " + language;
    }
}

// console.log(user4.getNameAndLanguage());//name is not defined JavaScript looks for name and language as local variables or globals, but finds none

// the solution is this keyword
const user5 = {
    name:"karim",
    language:"arabic",
    getNameAndLanguage:function(){
        return this.name + " " + this.language;
    }
}

console.log(user5.getNameAndLanguage());//karim arabic this keyword refers to the object that called the method

//Object Constructor Functions

//i have 100000 user i will make 10000 object is there any way to not wasting my time and avoiding mistakes while creating same objects same properties for different users
function User(name,language) {
    this.name = name;
    this.language = language
}
// in the constructor function, this has no value.
// the value of this will become the new object when a new object is created.
const user6 = new User("karim", "arabic");
console.log(user6.name);//karim 

// if we have company and must be employee  works on site 

function Employee(name,salary) {
    this.name = name
    this.salary=salary
    this.work = "onsite"//default value for all objects created by the constructor
}

const karim = new Employee("karim", 10000000);
console.log(karim.work);//onsite

//nested Objects

const company = {
    name:"google",
    employees: {
        employeeOne:"karim",
        employeeTwo:"ali",
        employeeThree:"ahmed",
    }
}

console.log(company.employees.employeeOne);//karim


//for - in
const student = {
    name:"karim",
    age:15
}

for (const item in student) {    
    console.log(item);//name - age
    console.log("student",student[item]);//karim -15
}



const data = {
  items: [
    { id: 1, name: "Wireless Mouse", price: 15.99, category: "Electronics", inStock: true },
    { id: 2, name: "Bluetooth Headphones", price: 39.99, category: "Electronics", inStock: false },
    { id: 3, name: "Coffee Mug", price: 7.5, category: "Kitchen", inStock: true },
    { id: 4, name: "Notebook", price: 2.99, category: "Stationery", inStock: true },
    { id: 5, name: "LED Desk Lamp", price: 24.5, category: "Home", inStock: true },
    { id: 6, name: "USB-C Cable", price: 4.99, category: "Electronics", inStock: true },
    { id: 7, name: "Water Bottle", price: 10.0, category: "Sports", inStock: false },
    { id: 8, name: "Backpack", price: 29.99, category: "Accessories", inStock: true },
    { id: 9, name: "Keyboard", price: 22.49, category: "Electronics", inStock: true },
    { id: 10, name: "Wall Clock", price: 12.0, category: "Home", inStock: false }
  ]
};

// convert to array using Object.values
const itemsArray = Object.values(data);

console.log(itemsArray);

// JSON.stringify()
// JSON.stringify() is a JavaScript method that converts a JavaScript object or array into a JSON string.
// used for :
//Send data to a server via an API
// Save data in localStorage
//Write data to a file

const test = JSON.stringify(data)
console.log(test);//{"items":[{"id":1,"name":"Wireless Mouse","price":1"

//to convert back to object
const obj = JSON.parse(test);
console.log(obj); // original object will be logged



const student2 = {
    name:"karim",
    skills:["JS","PHP","React"]
}
const copy = {...student2}
copy.name = "ali";
console.log(copy.name);//ali
console.log(student2.name);//karim

copy.skills.push("Angular")
//the skills array is an object reference — both user and copy share the same array in memory.
console.log(student2.skills);//[ 'JS', 'PHP', 'React', 'Angular' ]
console.log(copy.skills);//[ 'JS', 'PHP', 'React', 'Angular' ]

const student3 = {
  name: "Karim",
  skills: ["HTML", "CSS", "JS"]
};

console.log("----------------------------");

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(student3));

deepCopy.skills.push("React");

console.log("deep copy",student3.skills);// ["HTML", "CSS", "JS"]
console.log("deep copy",deepCopy.skills);// ["HTML", "CSS", "JS", "React"]






































