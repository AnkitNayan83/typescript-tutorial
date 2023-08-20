// const superHeros = [] --> type never
// const superHeros: [] = [] -->  type emptyArray
const superHeros: string[] = [] // --> type array of strings
superHeros.push("Ankit")
// superHeros.push(5); -> not accepted

const power: Array<number> = [];
power.push(100)

type user = {
    name: string,
    age: number
}

const users: Array<user> = []
// or const users: user[] = []

users.push({ name: "aNKIT", age: 20 })
console.log(users[0]);


const digitalImage: number[][] = [
    [255, 245, 200],
    [123, 31, 21]
]


export { }