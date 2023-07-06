// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function () {
//             console.log(2);
//         }, 1000)
//     }, 1000)
// }, 3000)

// callback hell
// promise chain

let promise = new Promise(
    function(resolve, reject)
    {
        // logic
        let number = 5;
        if(number >= 5){
            return resolve(1);
        }
        return reject();
    }
)

promise
    .then(function(data){
        console.log(data);
        return data + 1;
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(){
        console.log("Reject");
    })
    .finally(function(){
        console.log("DONE");
    })