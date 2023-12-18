const people = ["Aaron","mel","john"];
const one = 1;
const str = "Hello world";
const b = true;
const employee = {
    firstName: "Anirach",
    lastName : "mingkhwan",
};

function sayHello(person) {
    console.log("hello"+people.firstName);
}
console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);