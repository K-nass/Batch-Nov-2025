
function test() {
    console.log(this); //window note if strict mood will be undefined
}
test()

const obj = {
    name:"karim",
    sayHello() {
        console.log(this);
        console.log(this.name);//karim
    }
}

obj.sayHello()//{ name: 'karim', sayHello: [Function: sayHello] }


//call 
function sayHello() {
    console.log(this.name);
}

const user = {name:"karim"}

sayHello.call(user);//karim

//call same as apply but it takes args in array
function sum(a, b) {
    console.log(this.name, a + b);
}

sum.apply({ name: "Karim" }, [5, 10]); // Karim 15


function greet() {
    console.log("Hello", this.name);
}
// bind
const person = { name: "Karim" };
const greetKarim = greet.bind(person);
greetKarim(); // Hello Karim


// new Binding -Constructor Pattern
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new Person("Karim", 25);
console.log(p1.name); // Karim

//Prototype Chain
//_proto_ is a link to prototype
const user1 = { name: "Karim" };
console.log(user1.__proto__); // Object prototype



function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    console.log("Hello", this.name);
};

const u = new User("Karim");
u.sayHi(); // Hello Karim


// method borrowing with call
const obj1 = {
    name: "Karim",
    show() {
        console.log(this.name);
    }
};

const obj2 = { name: "ali" };

obj1.show.call(obj2); // ali


function Car(model) {
    this.model = model;
}

Car.prototype.start = function () {
    console.log(this.model, "is starting");
};

const c1 = new Car("BMW");
c1.start(); // BMW is starting


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    console.log(`hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

const karim = new Person('karim', 30);
const ali = new Person('ali', 25);

karim.introduce(); //hi, my name is karim and I am 30 years old.
ali.introduce();  //hi, my name is ali and I am 25 years old.
 



