/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/
// function angkaTerbesar(array) {
//     if (array.length === 0) {
//         return -1;
//     }
//    for (var i = 0; i < array.length; i++) {
//        for (var j = i+1; j <array.length; j++) {
//             if (array[i] > array[j]) {
//                 [array[i],array[j]] = [array[j],array[i]];
//             }
//        }
//    }
//    return array[array.length-1];
// }
function angkaTerbesar(arr) {
    if (arr.length === 1) {
        return arr[0];
    } 
        if (arr[0] > arr[1]) {
            arr[1] = arr[0]
        } 
            return angkaTerbesar(arr.splice(1))
        
    }
}
// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
// console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
// console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
// console.log(angkaTerbesar([])) // -1
  