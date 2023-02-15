// Ternary Operator (toán tử ? :)
// gender = true => Mr
// gender = false => 
//                 married = false => Ms
//                 married = true => Mrs

let name = "Châu";
let gender = false;
let married = true;

// if(gender == true){
//     console.log("Hello, Mr." + name);
// }
// else{
//     if(married == true){
//         console.log("Hello, Mrs." + name);
//     }
//     else {
//         console.log("Hello, Ms." + name);
//     }
// }

console.log(`Hello, ${gender == true ? 'Mr' : married == true ? "Mrs" : "Ms"}. ${name}`); 

// gender == true ? 
//             console.log("Hello, Mr." + name) : 
//             (married == true ? 
//                     console.log("Hello, Mrs." + name) : 
//                     console.log("Hello, Ms." + name));

// console.log("Hello, Mr." + name);

// Hello, Mr. ${...}
// console.log(`Hello, Mr. ${name}`);

// let a = 5;
// let b = 10;
// let c = 8;
// ax2 + bx + c = 0;

// 5x2 + 10x + 8 = 0;

// console.log(a + "x2 + " + b + "x + " + c + " = 0");
// console.log(`${a}x2 + ${b}x + ${c} = 0`);

let a = 10;
let b = 5;
// (a^2 - b^2) = (a + b)x(a - b); 
// (...^2 - ...^2) = (... + ...)x(... - ...); 
console.log(`(${a}^2 - ${b}^2) = (${a} + ${b})x(${a} - ${b})`);