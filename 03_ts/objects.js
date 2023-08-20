"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Ankit",
    email: "asd@gail.com",
    isActive: true,
    isAdmin: false
};
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
}
var newUser = { name: "Ankit", isPaid: true, email: "abs@gmail.com" };
createUser(newUser); //wierd behaviour
function createCourse(_a) {
    var name = _a.name, price = _a.price;
    return { name: "react", price: 234 };
}
function cUser(user) {
    return { name: "Ankit", email: "ankit@gmail.com", isActive: true };
}
cUser({ name: "", email: "", isActive: true });
var venue = {
    milageperKm: 20,
    engineCompany: "hundai",
    engineType: "V8",
    isRegistered: true,
    registerDate: "12/12/12",
    registerNumber: "123456"
};
console.log(venue);
// You create a function "createUser", that takes in object with "name" and "isPaid" properties.
// But instead of giving them a type, you destructuring the object
// and reassigning "name" to "string" and "isPaid" to "boolean",
// But object itself still has "any" type!
// function createUser({ name: string, isPaid: boolean }) {}
// Same as:
// function createUser({ name: string, isPaid: boolean }: any) {}
// Almost same as:
// function createUser({ name, isPaid }) {    ---> type is still "any"
//     const string = name
//     const boolean = isPaid
// }
// I think you wanted to to something like this instead:
// function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {}
// Or this:
// type User = { name: string, isPaid: boolean }
// function createUser({ name, isPaid }: User) {}
