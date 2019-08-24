
// function dividableRecursive (array, num) {
//     var result = '';
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % num === 0) {
//             result += String(array[i]) + " ";
//         }
//     }
//     return result;
// }
function dividableRecursive (array,num) {
    if (array.length === 0) {
        return '';
    } else {
        if (array[0] % num === 0) {
            return String(array[0]) + ' ' +dividableRecursive(array.slice(1),num);
            
        }
        return dividableRecursive(array.slice(1),num);
    }
}

// DRIVER CODE
console.log(dividableRecursive([66 , 33 , 55 , 44 , 11], 3)) // 66 33
console.log(dividableRecursive([123 , 222 , 100 , 50 , 32], 2)) // 222 100 50 32
console.log(dividableRecursive([125 , 500 , 201 , 202 , 66], 5)) // 125 500
console.log(dividableRecursive([66 , 33 , 55 , 44 , 132], 6)) // 66 132

