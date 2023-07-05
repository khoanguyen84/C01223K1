// truthy và falsy
// convert tất cả kiểu dữ liệu về kiểu Boolean
// convert -> false
// 0 -> false
// false -> false
// null -> false
// empty -> false ví '' -> false
// undefined -> false
// NaN -> false

let fullname = "";
// if(fullname){
//     console.log(fullname);
// }
// else {
//     console.log("No name");
// }

// console.log(fullname || 'No name');

let jobs = ['java', 'js']

console.log(jobs.length && jobs.toString() || 'Jobs is empty');