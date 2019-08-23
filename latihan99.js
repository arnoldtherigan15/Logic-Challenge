// function reversedWord (str)  {
//     var temp = '';
//     for (var i = str.length-1; i >= 0; i--) {
//         temp += str[i];
//     }
//     return temp;
// }
function reversedWord (str)  {
    var temp = '';
    if (str.length === 0) {
        return temp;
    } else {
        temp += str[str.length-1];
        return temp + reversedWord(str.slice(0,-1));
    }
}
console.log(reversedWord('hello world'));
// var kata = 'hello world';
// console.log(kata.slice(-1));