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
//# sourceMappingURL=index.js.map