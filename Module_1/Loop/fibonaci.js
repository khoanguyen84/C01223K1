let count = 20;
let fn_1 = 1;
let fn_2 = 1;
let fn = 0;
console.log(fn_1);
console.log(fn_2);
for(let i = 2; i <= 20; i++){
    fn = fn_1 + fn_2;
    console.log(fn);
    fn_1 = fn_2;
    fn_2 = fn;
}