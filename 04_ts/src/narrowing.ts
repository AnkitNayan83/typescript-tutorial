function detectType(val: number | string): number | string {
    // return val.toUpperCase();

    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 4;
}
// typeof --> type guard
function provideId(id: string | null) {
    if (!id) {
        alert("provide id");
        return;
    }
    id.toLowerCase();
}


// ******** type of null and array is object be careful for thata !!! **********

// function printAll(strs: string | string[] | null) {
//     // !!!!!!!!!!!!!!!!
//     //  DON'T DO THIS!
//     //   KEEP READING
//     // !!!!!!!!!!!!!!!!
//     if (strs) {
//       if (typeof strs === "object") {
//         for (const s of strs) {
//           console.log(s);
//         }
//       } else if (typeof strs === "string") {
//         console.log(strs);
//       }
//     }
//   }


interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: true
}
// in property to check for properties
function isAdmin_(account: User | Admin): boolean {
    if ("isAdmin" in account) {
        return true;
    }
    return false;
}

//instanceof (typeof for instance)

function logValue(x: Date | string) {
    if (x instanceof Date) console.log(x.toUTCString());
    else console.log(x.toUpperCase());
}


//
type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}

//

