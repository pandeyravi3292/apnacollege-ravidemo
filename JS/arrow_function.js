// => arrow function - is a function with no name method, it is also called as anonymous function.

let print = () =>{
    console.log("this is an arrow function");
}

print();

let even = (num) => num % 2 === 0;
let e1 = even(10);
console.log(e1);
    