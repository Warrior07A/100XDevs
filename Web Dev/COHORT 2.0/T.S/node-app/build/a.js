"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main() {
    sec();
}
function sec() {
    setTimeout(() => {
        console.log("hi there");
        third();
    }, 1000);
}
function third() {
    setTimeout(() => {
        console.log("hi there 2");
    }, 1000);
}
main();
//# sourceMappingURL=a.js.map