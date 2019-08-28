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
function angkaTerbesar(array) {
    if (array.length === 0) {
        return -1;
    }
    if (array.length === 1) {
        // console.log(array);
        
        return array[0];
    } else {
        // console.log(array);
        
        if (array[1] > array[0]) {
            array[0] = array[1];
        } else {
            array[1] = array[0];
        }
        return angkaTerbesar(array.slice(1));
    }

}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
// console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
// console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
// console.log(angkaTerbesar([])) // -1
