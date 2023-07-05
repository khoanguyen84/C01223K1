// gốc JS => ECMA Script => TypeScript

// đối với JS thì từ khóa function được sử dụng trong những trường hợp sau

// 1. Declaration Function
function sum(n1, n2) {
    console.log(n1 + n2);
}
sum(10, 20)
// 2. Expression Function
// const times = function (n1, n2) {
//     console.log(n1 * n2);
// }
// const times = (n1, n2) => console.log(n1 * n2);
// times(10 ,20)

// const alert = function(message) {
//     return `[Info]: ${message}`;
// }
// const alert = (message) => `[Info]: ${message}`;
// console.log(alert('Product created success'));

// const hello = function() {
//     console.log("Hello everyone!");
// }

const hello = () => console.log("Hello everyone!");

hello();


// 3. Anonymous/Callback function
let numbers = [4, 6, 3, 45, 6, 8, 6, 4];

// let powers = numbers.map(function (number) {
//     return number ** 2;
// })
let powers = numbers.map((number) => number ** 2)

console.log(powers);

// 4. create class
// Naming Convention = Pascal Case
// function Student() {

//     // 5. create method inside class
//     this.greeting = function () {
//         return 'Hello';
//     }
// }
class Student {
    greeting() {
        return 'Hello';
    }
}

let std = new Student();
console.log(std.greeting());