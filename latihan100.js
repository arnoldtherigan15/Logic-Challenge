// function cekPalindrome (str) {
//     var isFind = false;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === str[(str.length-1)-i]) {
//             isFind = true;
//         }
//        else {isFind = false} ;
//     }
//     if (isFind === true) {
//         return true;
//     } else {
//         return false;
//     }
// }
function cekPalindrome(str) {
    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return isFind;
    } else {
        if (str[0] === str[str.length - 1]) {
            isFind = true;
            return isFind = cekPalindrome(str.slice(1,-1));
        } else {
            return false;
        }
    }
}
console.log(cekPalindrome('abc'));
// var kata = 'civic';
// console.log(kata.slice(1,-1));
