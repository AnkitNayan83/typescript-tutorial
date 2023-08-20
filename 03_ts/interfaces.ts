interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string,
    // startTrial: () => string
    startTrial(name: string): string,
    getCoupon(couponName: string, value: number): number
}
// reopening of interface
interface User {
    access_token: string
}

//inheritance in interface
interface Admin extends User {
    role: "admin" | "ta" | "manager"
}

const Ankit: User = {
    dbId: 123, email: "a@a.com", userId: 221, access_token: "a23df1",
    startTrial: (name: "ankit") => {
        return name + "your trial has started"
    },
    getCoupon: (name: "ankit", value: 10) => {
        return value;
    }
}

const Andrew: Admin = {
    dbId: 123, email: "a@a.com", userId: 221, access_token: "a23df1",
    role: "manager",
    startTrial: (name: "ankit") => {
        return name + "your trial has started"
    },
    getCoupon: (name: "ankit", value: 10) => {
        return value;
    }
}

export { }