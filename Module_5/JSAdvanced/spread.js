// pass_by_value (truyền tham trị): string, number, boolean
// pass_by_reference (truyền tham chiếu): object, array, function

// let jobs_1 = ["Java", "C#", "JS"];
// let jobs_2 = jobs_1;
// jobs_2[2] = 'CSS';
// let jobs_2 = ["Java", "C#", "CSS"]
// let jobs_2 = [...jobs_1, 'CSS']
// jobs_2[2] = 'CSS';

// console.log(jobs_1);
// console.log(jobs_2);

let std_1 = {
    name: "Bằng",
    age: 20,
    gender: true
}

// let std_2 = std_1;
// let std_2 = {...std_1}
// std_2.name = "Nhật";
// let std_2 = {
//     ...std_1,
//     name: "Nhật",
//     email: 'nhat@gmail.com'
// }

// console.log(std_1);
// console.log(std_2);

let bang = {
    name: "Bằng",
    age: 18,
    gender: true,
    language : {
        name: "English",
        level: "B1"
    }
}

// let nhat = {
//     ...bang,
//     name: "Nhật",
//     language: {
//         ...bang.language,
//         level: "B2"
//     }
// }

let nhat = JSON.parse(JSON.stringify(bang))
nhat.name = "Nhật";
nhat.language.level = "B2"
console.log(bang);
console.log(nhat);