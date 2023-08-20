"use strict";
// they are to used to create reusable components
const score = []; //Array is generic as we can use it to create 
const names = []; // array of any datatypes with same keyword
// lot of or's in case of multiple types
function function1(val) {
    return val;
}
// no type defined input can be string and we will still be able to return string
function function2(val) {
    return val;
}
// generic funtion ***
function function3(val) {
    return val;
}
function3(10);
// if we are using our custom datatype then we need to use this syntax
function3({ brand: "milton", color: "grey" });
function getSearchedProducts(params) {
    return params[0];
    // return 3;
}
//*********************comma is used to indicate that it's not a html tag
const getSearchedProductsTwo = (params) => {
    return params[1];
};
const objectGeneric = (key, val) => {
    return { key, val };
};
objectGeneric(3, { connection: "ipv4", user: "ankit", pass: 123456 });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const obj = new Sellable();
console.log(typeof obj.cart);
