// function cekPrima (num) {
//     var counter = 0;
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             counter++;
//         }
//     }
//     if (num === 1) {
//         return false;
//     } else if (counter === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
function cekPrima (num) {
    var counter = 0;
    if (num === 0) {
        return counter;
    } else {
        if (num % num-1 === 0) {
            counter++;
            return counter + cekPrima(num-1);
        } 
        if (counter === 0) {
            return true;
        } else {
            return false;
        }
    }
 
    // if (num === 1) {
    //     return false;
    // } 
}
console.log(cekPrima(4));
// function cekPrima (num) {
//     if (num === 2) {
//         return 0;
//     } else {
//         if (num % num-1 === 0) {
//             return 0 + cekPrima(num-1);
//         }
//     }
// }
// console.log(cekPrima(3));