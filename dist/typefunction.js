"use strict";
const saveuser = (req, res) => {
    return req + res;
};
const resutl = saveuser(10, 20);
console.log(resutl);
const getError = (req = "default 1", res = "default 2") => {
    return {
        name: req,
        age: res,
    };
};
const errorResult = getError("server error", "server logs");
console.log(errorResult);
function hello() {
    console.log("welcome");
}
function callme() {
    return "hii";
}
hello();
