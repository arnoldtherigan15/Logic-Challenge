// function deretBintang (bintang) {
//     var result = '';
//     for (var i = 0; i < bintang; i++){
//         for (var j = 0; j < i+1; j++) {
//             result+= '*';
//         }
//         result += '\n';
//     }
//     return result;
// }
// console.log(deretBintang(5));

function deretBintang (bintang) {
    var result = '';
    if (result.length === bintang) {
        return result ;
    } else {
        for (var j = bintang; j > 0; j--) {
            result+= '*';
        }
        result += '\n';
        return result + deretBintang(bintang-1);
    }
}
console.log(deretBintang(3));
