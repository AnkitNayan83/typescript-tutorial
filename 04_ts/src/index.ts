console.log("typescript");

// class User {
//     private readonly city: string = "noida"
//     email: string
//     name: string
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//         this.city.toUpperCase();
//     }
// }

class User {
    private readonly city: string = "noida"
    protected _courseCount = 1; //this variable will be accessed by this class and any class inherited from this class
    constructor(
        public name: string,
        public email: string,
        private userId: string
    ) {
    }

    get getEmail(): string {
        return `class${this.email}`
    }

    get courceCount(): number {
        return this._courseCount;
    }

    set courceCount(courceNum) { //setter never returns any value***
        if (courceNum <= 1) throw new Error("nope")

        this._courseCount = courceNum;
    }
}

class subUser extends User {
    changeCourceCount() {
        this._courseCount = 4;
    }
}

const ankit = new User("Ankit", "a@a.com", "123")
// console.log(ankit.city);