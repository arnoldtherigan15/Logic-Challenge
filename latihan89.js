// INPUT 'I have a dream'
// OUTPUT 4

// function hitungKata (str) {
//     var count = 1;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             count++
//         }
//     }
//     return count;
// }
// function hitungKata (str,i) {
//     if() {

//     }
// }
// console.log(hitungKata('I have a dream'));
function hitungKata (str) {
    if (str === '') {
        return 1;
    }
    else {
        if (str[0] === ' ') {
            return 1 + hitungKata(str.slice(1))
        } else {
            return hitungKata(str.slice(1));
        }
    }
   
}
console.log(hitungKata('I have a dream a song to sing'));
// var kata = 'I have a dream';
// console.log(kata.slice(1));

