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
































