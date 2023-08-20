// they are to used to create reusable components

const score: Array<number> = []; //Array is generic as we can use it to create 
const names: Array<string> = []; // array of any datatypes with same keyword

// lot of or's in case of multiple types
function function1(val: boolean | number): boolean | number {
    return val;
}

// no type defined input can be string and we will still be able to return string
function function2(val: any): any {
    return val;
}

// generic funtion ***
function function3<Type>(val: Type): Type {
    return val;
}

function3(10);

interface Bottle {
    brand: string,
    color: string,
}
// if we are using our custom datatype then we need to use this syntax
function3<Bottle>({ brand: "milton", color: "grey" })

function getSearchedProducts<T>(params: T[]): T {
    return params[0];
    // return 3;
}
//*********************comma is used to indicate that it's not a html tag
const getSearchedProductsTwo = <T,>(params: T[]): T => {
    return params[1];
}

interface Database {
    connection: string,
    user: string,
    pass: number
}

const objectGeneric = <T, U extends Database>(key: T, val: U): object => {
    return { key, val };
}

objectGeneric(3, { connection: "ipv4", user: "ankit", pass: 123456 })

// const objectGeneric = <T, U extends number>(key: T, val: U): object => {
//     return { key, val };
// }

// objectGeneric(3, "5")


// generic class

interface Quiz {
    name: string,
    marks: number
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product);
    }
}

const obj = new Sellable<Quiz>();

console.log(typeof obj.cart);