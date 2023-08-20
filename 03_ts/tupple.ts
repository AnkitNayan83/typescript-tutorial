const user: (number | string)[] = ["1", 1]

// const userTupple: [number, string] = ["1", 1]
const userTupple: [number, string] = [1, "1"] //tupple is used to manage specific order
console.log(userTupple);
type user = [number, string]

const newUser: user = [1, "1"]

newUser[1] = "12" // we can manupulate tupple 😵

export { }