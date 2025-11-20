let num = 42; //  infers: number
let userName = "Karim"; //  infers: string

// userName = 1; //error
let id: string | number;
id = "abc";
id = 123;
// id = true; error

type Person = { name: string };
type Employee = { id: number };

type EmployeePerson = Person & Employee;
const emp: EmployeePerson = { name: "Karim", id: 1 };

let direction: "up" | "down" | "left" | "right";
direction = "up";
// direction = "forward"; //error

function double(value: string | number) {
  if (typeof value === "number") {
    return value * 2;
  }
  return value + value;
}

let res =double(4);
console.log(res);//8

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) animal.swim();
  else animal.fly();
}


class Dog { bark() {} }
class Cat { meow() {} }

function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) pet.bark();
  else pet.meow();
}

const dog = new Dog();
const bird = new Cat();
speak(dog);
speak(bird);


enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move2: Direction = Direction.Up;


// function add(a, b) {
//   return a + b;
// }

function add(a: number, b: number): number {
  return a + b;
}
