var num = 42; //  infers: number
var userName = "Karim"; //  infers: string
// userName = 1; //error
var id;
id = "abc";
id = 123;
var emp = { name: "Karim", id: 1 };
var direction;
direction = "up";
// direction = "forward"; //error
function double(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    return value + value;
}
var res = double(4);
console.log(res);
