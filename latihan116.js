function xo(str) {
//    var countX = 0;
//    var countO = 0;
//    for (var i = 0; i < str.length; i++) {
//         if (str[i] === 'x') {
//             countX++;
//         } else if (str[i] === 'o') {
//             countO++;
//         }
//    }
//    if (countO === countX) {
//        return true
//    }
//    return false;
// }
function xo(str) {
    //     var countX = 0;    var countO = 0;
    if (str.length === 0) {
        return 0;
    } else {
        if (str[0] === 'x') {
            // countX++; console.log('x = ',countX);
            return 1 + xo(str.slice(1));
        } else if (str[0] === 'o') {
            countO++;
            // console.log('o = ',countO);

            return 1 + xo(str.slice(1));
        }
        // if ()    }    if (countO === countX) {     return true } return false;

    }
}
}
// TEST CASES
console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true