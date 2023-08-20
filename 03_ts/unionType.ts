
let nodeValue: number | string = "null"
nodeValue = 12

type User = {
    name: string,
    id: number
}

type AdminUser = {
    username: string,
    id: number
}

let Ankit: User | AdminUser = { name: "Ankit", id: 123 }

Ankit = { username: "Admin", id: 12 }

function getInfo(id: number | string): void {
    // api call to get data
    let res = { name: "user", email: "asd@gmail.com" }
    console.log(res);

    // if i do id.tolowercase it will throw error
    // id.toLowerCase(); because id can be both number and a string
    // so first we need to check for its type before manupulation

    if (typeof id === "string") { id.toLowerCase() }
    else if (typeof id === "number") { id = Math.pow(id, 2) }

    console.log(id);
}

const data: number[] = [1, 2, 3] // only numbers array
const data1: string[] = ["1", "2", "3"] // only string array
const data3: string[] | number[] = ["1", "2", "3"] // either string or number array
const data4: (string | number)[] = [1, "2", 3] // mixed type array

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "window"

export { }