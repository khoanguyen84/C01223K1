class Staff {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age;
    }
}

let bang = new Staff("Bằng", 18);

console.log(bang.getName());

// this = context (ngữ cảnh)

if (Array.prototype.sum != 'function') {
    Array.prototype.sum = function () {
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total += this[i]
        }
        return total;
    }
}


if (Array.prototype.map2 != 'function') {
    Array.prototype.map2 = function (callback) {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i))
        }
        return result;
    }
}




let numbers = [1, 2, 3, 4, 5]
let numbers_2 = [10, 20, 30, 40, 50]

let times_2 = numbers.map2(function (value , index) {
    return value * 2
})

console.log(times_2);

// console.log(numbers.sum());
// console.log(numbers_2.sum());


