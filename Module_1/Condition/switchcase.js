// let level = 5;

// switch (level) {
//     case 4:{
//         console.log("Bốn");
//         break;
//     }
//     case 5 : {
//         console.log("Năm");
//         break;
//     }
//     default: {
//         console.log("Not found");
//         break;
//     }
// }

let score = "a";
switch (true) {
    case score >= 9 && score <= 10: {
        console.log("A");
        break;
    }
    case score >= 8 && score < 9: {
        console.log("B");
        break;
    }
    case score >= 7 && score < 8: {
        console.log("C");
        break;
    }
    case score >= 6 && score < 7: {
        console.log("D");
        break;
    }
    case score >= 0 && score < 6: {
        console.log("F");
        break;
    }
    default : {
        console.log("Invalid score, you must enter/input score between 0 and 10.");
        break;
    }
}