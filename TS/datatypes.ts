// This is a test file under a new folder named "TS" in the project "apnacollege-ravidemo". 
// The file is named "datatypes.ts" and it contains TypeScript code that demonstrates various data types available in TypeScript. 
// The code includes examples of primitive types, arrays, tuples, enums, and any type. It also shows how to define and use interfaces and classes in TypeScript. 
// The file serves as a reference for understanding the different data types and their usage in TypeScript programming.

let num: number = 100;
console.log("Number:", num);
console.log(typeof num);

let str: string = "Hello, TypeScript!";
console.log("String:", str);
console.log(typeof str);

let isActive: boolean = true;
console.log("Boolean:", isActive);
console.log(typeof isActive);

// void

function testing(): void {
    console.log("hello testing...");
};
testing();

function getMarks(strName: string): void {
    console.log(strName, 100);
    console.log(strName.length);
};

getMarks("Ravi");