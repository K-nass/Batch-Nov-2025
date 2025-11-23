type UserName = string
type salary = string

interface User {
    name: UserName
    salary: string
}

const user: User = {
    name: "karim",
    salary: "10000000"
}

type Employee = {
    name: string
    salary: string
    hasCar: boolean
}


type Person = {
    isHasHeart: boolean
}
const emp: Employee = {
    name: "karim",
    salary: "15000000",
    hasCar: true
}

// Union
const emp2: Person & Employee = {
    isHasHeart: true,
    name: "karim",
    salary: "150000",
    hasCar: true
}


interface Employee2 {
    name: string
}


interface Player extends Employee2 {
    position: string
    salary: number
    stamina: number
}

const player2: Player = {
    position: "defender",
    salary: 1000000000000000000,
    stamina: 5,
    name: "karim"
}

//types and interfaces supporting inheritance 

type Car = {
    model: string
    name: string
    year: number
}


type Machine = {
    isHasEngine: boolean
}
// intersections
const car: Car & Machine = {
    model: "marc",
    name: "marc",
    year: 1955,
    isHasEngine:true
}

type Name = {
    isRed?:boolean,
    isGreen?:boolean
}

interface Color extends Name {
    hasColor:boolean
}

const color:Color = {
    hasColor:true,
    isGreen:true,
}


// merge
interface Browser {
    isFast:boolean
}
interface Browser {
    name:string
    hasV8:boolean
}

const fireFox:Browser = {
    isFast:true,
    name:"fireFox",
    hasV8:true
}

//can not merge

// type Box = { height: number };
// type Box = { width: number }; //duplicate identifier


type Status = "success" | "error" | "loading";
const currentState:Status = "success"

class Developer implements Person,Name {
    isHasHeart= true
    isGreen?: true
}


type Add = (x:number,y:number) => number
const add:Add = (x,y) => x + y

let res = add(1,2)
console.log(res);


interface User2 {
    readonly salary:number
    name:string
}

const u:User2 = {salary:150000,name:"karim"};
// u.salary = 10  //Cannot assign to 'salary' because it is a read-only property.ts(2540)



interface Employees<T> {
    employees:T[],
    hire(user:T):void,
    fire(user:T):void
}

const employees:Employees<string> ={
    employees:[],
    hire(user){this.employees.push(user)},
    fire(user){this.employees.pop()}
}

employees.hire("karim")
employees.fire("karim")


interface ApiResponse {
    id:number,
    userId:number
    name:string
}

const needed:Partial<ApiResponse> ={
    name:"karim"
}

console.log(needed);


const pickNeeds:Pick<ApiResponse,"name"> = {
    name:"karim"
}

// Create a generic function `wrapInArray`
// that takes any value and returns it inside an array.
// Example: wrapInArray(5) -> [5]


function wrapInArray(n:number):number[] {
    return [n]
}

let res3 = wrapInArray(5);
console.log(res3);

// Create a `User` type with
// id: number
// name: string
// isAdmin?: boolean (optional)

interface User3 {
    id:number,
    name:string,
    isAdmin:boolean
}

const u3:User3 = {
    id:1,
    name:"karim",
    isAdmin:true,
}
console.log(u3);

// Write a function `printLength`
// It accepts either a string or an array.
// If string → print string length
// If array → print array length

function printLength(item:string | string[]):number {
    return item.length
}
let res4 = printLength("karim");
let res5 = printLength(["karim","ali"]);

console.log(res4);
console.log(res5);

// Create interface Person { name: string }
// Create interface Employee that extends Person and adds salary: number

interface Person2 {
    name:string
}

interface Employee2 extends Person2 {
    salary:number
}

const e3:Employee2 = {name:"karim", salary:15000};

// Create a Record type named `Scores`
// keys: "math" | "science" | "english"
// values: number

type Scores = "math"|"science"|"english"

const s:Record<Scores,number> ={
    math:15,
    science:20,
    english:25
}

// Create interface ApiResponse<T> with:
// data: T
// status: number
// message: string

interface ApiResponse2<T> {
    data:T,
    status:number,
    message:string
}

const apiResponse:ApiResponse2<string> = {
    data:"hello i am string",
    status:200,
    message:"good luck"
}

// Given type Product { id:number; name:string; price:number }
// Create:
// a) type ProductUpdate = Partial<Product>
// b) type ProductStrict = Required<Product>

type Product ={
    id:number,
    name:string,
    price:number
}

const ProductUpdate:Partial<Product>={
    name:"laptop",
    price:1000
}

const ProductStrict:Required<Product> = {
    id:1,
    name:"laptop",
    price:10000
}

// Create a function `getProp`
// Accepts object and key
// Returns the object[key]
// Key must be a valid key of the object

function getProp<T,K extends keyof T>(obj:T,key:K):T[K] {
    return obj[key]
}
const user4 = {
    id:1,
    name:"karim",
    isAdmin:true
}

let res6 = getProp(user4,"id");
console.log(res6);














































