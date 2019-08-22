// INPUT 'Hellow world!'
// OUTPUT !dlrow olleH

// function balikKata (str) {
//     // var result = [];
//     // var indeks = str.length;
//     if (result.length === str.length) {
//         return result;
//     } else {
//         result.push(balikKata(str.slice(0,-1)));
//         console.log(result);
//     }
// }
// // console.log(balikKata('Hellow world!'));
// var kata = 'Hellow world!';
// console.log(kata.length);
// console.log(kata.slice(0,-1));
// console.log(kata.length);
function balikKata(kata) {
    if(kata.length == 1) {
        return kata[kata.length - 1];
    } else {
        return kata[kata.length - 1] + balikKata(kata.slice(0, -1));
    }
}
console.log(balikKata('Hellowworld!'));