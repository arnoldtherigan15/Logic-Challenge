// function cariPelaku(str) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//       if (str[i] === 'a') {
//           if(str[i+1] === 'b') {
//               if (str[i+2] === 'c') {
//                   count++;
//               }
//           }
//       }
//   }
//   return count;
// }
function cariPelaku(str) {
    var count = 0;
    if (str.length === 0) {
        return count;
    } else {
        if(str[0] === 'a' && str[1] === 'b' && str[2] === 'c') {
            count++;
            return count + cariPelaku(str.slice(1));
        } else {
            return cariPelaku(str.slice(1));
        }
    }
}
// TEST CASES
console.log(cariPelaku('madbcvadbc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2

