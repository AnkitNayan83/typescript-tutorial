function addNum(num: number): number {
    return num + 2;
}

function upper(val: string): string {
    return val.toUpperCase();
}

let login = (name: string, email: string, isAdmin: boolean = false) => { }

addNum(2);
upper("noice")
login("Ankit", "abc@gmail.com")

// multiple types problem

function check(val: number): boolean | string {
    if (val < 5) return true;
    else return "STATUS 200"
}

const hello = (s: string): string => {
    return "hello user"
}

const heros = ["thor", "ironMan", "spiderMan"]

heros.map((hero): string => { return `hero ${hero}` })

function consoleErr(errMsg: string): void {
    console.log(errMsg);
}

function handelErr(errMsg: string): never {
    throw new Error(errMsg);
}

export { }