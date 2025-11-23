"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "karim",
    salary: "10000000"
};
const emp = {
    name: "karim",
    salary: "15000000",
    hasCar: true
};
// Union
const emp2 = {
    isHasHeart: true,
    name: "karim",
    salary: "150000",
    hasCar: true
};
const player2 = {
    position: "defender",
    salary: 1000000000000000000,
    stamina: 5,
    name: "karim"
};
// intersections
const car = {
    model: "marc",
    name: "marc",
    year: 1955,
    isHasEngine: true
};
const color = {
    hasColor: true,
    isGreen: true,
};
const fireFox = {
    isFast: true,
    name: "fireFox",
    hasV8: true
};
const currentState = "success";
class Developer {
    constructor() {
        this.isHasHeart = true;
    }
}
const add = (x, y) => x + y;
let res = add(1, 2);
console.log(res);
const u = { salary: 150000, name: "karim" };
const employees = {
    employees: [],
    hire(user) { this.employees.push(user); },
    fire(user) { this.employees.pop(); }
};
employees.hire("karim");
employees.fire("karim");
const needed = {
    name: "karim"
};
console.log(needed);
const pickNeeds = {
    name: "karim"
};
// Create a generic function `wrapInArray`
// that takes any value and returns it inside an array.
// Example: wrapInArray(5) -> [5]
function wrapInArray(n) {
    return [n];
}
let res3 = wrapInArray(5);
console.log(res3);
const u3 = {
    id: 1,
    name: "karim",
    isAdmin: true,
};
console.log(u3);
// Write a function `printLength`
// It accepts either a string or an array.
// If string → print string length
// If array → print array length
function printLength(item) {
    return item.length;
}
let res4 = printLength("karim");
let res5 = printLength(["karim", "ali"]);
console.log(res4);
console.log(res5);
const e3 = { name: "karim", salary: 15000 };
const s = {
    math: 15,
    science: 20,
    english: 25
};
const apiResponse = {
    data: "hello i am string",
    status: 200,
    message: "good luck"
};
const ProductUpdate = {
    name: "laptop",
    price: 1000
};
const ProductStrict = {
    id: 1,
    name: "laptop",
    price: 10000
};
// Create a function `getProp`
// Accepts object and key
// Returns the object[key]
// Key must be a valid key of the object
function getProp(obj, key) {
    return obj[key];
}
const user4 = {
    id: 1,
    name: "karim",
    isAdmin: true
};
let res6 = getProp(user4, "id");
console.log(res6);
//# sourceMappingURL=index.js.map