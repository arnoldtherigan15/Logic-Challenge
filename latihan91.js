
// 1)
// input: 4 (minimum 4, maksimal 9)
//  *******
//   *   *
//    * *
//     *
// input: 6
// ***********
//  *       *
//   *     *
//    *   *
//     * *
//      *
// segitiga ke kanan
function triangleStar (num) {
    var result = '';
    var alas = (num*2)-1;
    if (num < 4 || num > 9) {
        return '(minimum 4, maksimal 9)';
    }
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < alas; j++) {
            if (i === 0){
                result += '*';
            }
            else if (j === i || j === (alas-1)-i) {
                result += '*';
            } else {
                result+= ' ';
            }
        }
        result += '\n';
    }
    return result;
}
console.log(triangleStar(10));