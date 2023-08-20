"use strict";
function detectType(val) {
    // return val.toUpperCase();
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 4;
}
// typeof --> type guard
function provideId(id) {
    if (!id) {
        alert("provide id");
        return;
    }
    id.toLowerCase();
}
// in property to check for properties
function isAdmin_(account) {
    if ("isAdmin" in account) {
        return true;
    }
    return false;
}
