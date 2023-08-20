"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodeValue = "null";
nodeValue = 12;
var Ankit = { name: "Ankit", id: 123 };
Ankit = { username: "Admin", id: 12 };
function getInfo(id) {
    // api call to get data
    var res = { name: "user", email: "asd@gmail.com" };
    console.log(res);
    // if i do id.tolowercase it will throw error
    // id.toLowerCase(); because id can be both number and a string
    // so first we need to check for its type before manupulation
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else if (typeof id === "number") {
        id = Math.pow(id, 2);
    }
    console.log(id);
}
var data = [1, 2, 3]; // only numbers array
var data1 = ["1", "2", "3"]; // only string array
var data3 = ["1", "2", "3"]; // either string or number array
var data4 = [1, "2", 3]; // mixed type array
var seatAllotment;
seatAllotment = "window";
