// agrument (đối số) vs parameter (tham số)
// callback
// 1. Phải là 1 hàm
// 2. Hàm này phải được truyền vào 1 hàm khác thông qua agrument (đối số)
// 3. hàm này phải được thực thi

function callback(n1, n2) {
    return n1 + n1;
}

function callback_2(n1, n2) {
    return n1 * n2;
}
// function useCallback(){
//     console.log(callback(10, 20));
// }
// function useCallback_2(){
//     console.log(callback_2(10, 20));
// }

// useCallback();
// useCallback_2();

function useCallback(func){
    console.log(func(10, 20));
}

// useCallback(callback)
// useCallback(callback_2)
useCallback(function(n1, n2){
    return n1 + n2
})
useCallback(function(n1, n2) {
    return n1 * n2
})

let numbers = [5, 3, 5, 6, 4, 3]

let result = numbers.map(function(number){
    return number * 2;
})

let result_2 = numbers.map(function(number){
    return number ** 2;
})