// /**

//   Square Number

//   Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
//   Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
//   proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
//   alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
//   - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'
//   - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
//   - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'

//   Contoh 1:
//   ==========
//   input: 3
//   proses:
//           [
//             [ 1, 2, 3 ],
//             [ 6, 5, 4 ],
//             [ 7, 8, 9 ]
//           ]
//   output:
//           [
//             [x, o, x],
//             [o, x, #],
//             [x, #, x]
//           ]

//   Contoh 2:
//   ==========
//   input: 4
//   proses:
//         [
//           [ 1, 2, 3, 4 ],
//           [ 8, 7, 6, 5 ],
//           [ 9, 10, 11, 12 ],
//           [ 16, 15, 14, 13 ]
//         ]
//   output:
//         [
//           [ x, o, x, # ],
//           [ #, x, o, x ],
//           [ x, o, x, # ],
//           [ #, x, o, x ]
//         ]


// NOTE:
//  - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

// **/


// function squareNumber(num) {
//     var result = [];
//     var counter = 0;
//     for (var i = 0; i < num; i++) {
//         var temp = [];
//         for (var j = 0; j < num; j++) {
//             counter++;
//             if (i % 2 != 0) {
//                 temp.push(counter);
//                 temp.sort(function(a,b){
//                     return a < b;
//                 })
//             } else {
//                 temp.push(counter);
//             }
//             if (counter % 4 === 0) {
//                 temp[j] = '#';
//             } else if (counter % 2 === 0) {
//                 temp[j] = 'o';
//             } else {
//                 temp[j] = 'x';
//             }
//         }
//         result.push(temp);
//     }
//     return result;
// }

// console.log(squareNumber(3));
// // [ [x, o, x],  [o, x, #], [x, #, x] ]

// // console.log(squareNumber(4));
// // [ [ x, o, x, # ],
// //   [ #, x, o, x ],
// //   [ x, o, x, # ],
// //   [ #, x, o, x ] ]

// // console.log(squareNumber(5));
// // [ [ x, o, x, #, x ],
// //   [ o, x, #, x, o ],
// //   [ x, #, x, o, x ],
// //   [ #, x, o, x, # ],
// //   [ x, o, x, #, o ] ]

// // console.log(squareNumber(2)); // Minimal input adalah 3

// var input = ['asdgfhsdfgarh'];
// var newArr = [];
// var inputSplit = input[0].split('');
// var indeks = 0;
// for (var i = 0; i < inputSplit.length; i++) {
//     newArr.push([]);
    
//     for (var j = 0; j <= 3; j++) {
//         newArr[indeks].push(inputSplit[i]);
//         indeks++;
//     }
// }
// console.log(newArr);




function strSplit(str) {
    var result = [[]];
    for (var i = 0; i < str.length; i++) {
        if (result[result.length-1].length === 5) {
            result.push([]);
        }
        result[result.length-1].push(str[i]);
    }
    return result;
}
console.log(strSplit('asgfdgaddsddaffds'));

