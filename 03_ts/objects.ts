const user = {
    name: "Ankit",
    email: "asd@gail.com",
    isActive: true,
    isAdmin: false
}

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) { }

let newUser = { name: "Ankit", isPaid: true, email: "abs@gmail.com" }

createUser(newUser) //wierd behaviour

function createCourse({ name, price }: { name: string, price: number }): { name: string, price: number } {
    return { name: "react", price: 234 }
}

// using type to define object

type myUser = {
    name: string,
    email: string,
    isActive: boolean
}

function cUser(user: myUser): myUser {
    return { name: "Ankit", email: "ankit@gmail.com", isActive: true }
}

cUser({ name: "", email: "", isActive: true })


type saveUser = {
    readonly _id: string, // now no one can manupulate this
    name: string,
    email: string
    creaditCard?: number //question mark will make this field optional
}

type milage = {
    milageperKm: number,
}

type engine = {
    engineType: string
    engineCompany: string
}

type registration = {
    isRegistered: boolean,
    registerDate: string,
    readonly registerNumber: string
}

type car = milage & engine & registration & { color: string }

let venue: car = {
    milageperKm: 20,
    engineCompany: "hundai",
    engineType: "V8",
    isRegistered: true,
    registerDate: "12/12/12",
    registerNumber: "123456",
    color: "black"
};

// venue.registerNumber = "1234"

console.log(venue)



export { }


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
