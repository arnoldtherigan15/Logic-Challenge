/*
======================
Angka Ganjil Terkecil
======================

[INSTRUCTIONS]
ganjilTerkecil adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn sebuah angka ganjil terkecil dalam array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka -1

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
proses: akan mencari angka ganjil terkecil
output: 1

input: [2, 8, 6, 10, 12, 22, 24]
proses: akan mencari angka ganjil terkecil, karena tidak ada bilangan ganjil
output: -1
*/

function ganjilArray(array) {
    var ganjil = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            ganjil.push(array[i]);
        }
    }

    return ganjil;
}
function ganjilTerkecil(array) {
    var array = ganjilArray(array);
    if (array.length === 0) {
        return -1;
    }
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i],array[j]] = [array[j],array[i]];
            }
        }
    }
    return array[0];
}



console.log(ganjilTerkecil([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 1
console.log(ganjilTerkecil([2, 8, 6, 10, 12, 22, 24])); // -1
console.log(ganjilTerkecil([19, 21, 23, 51, 7, 37])); // 7
console.log(ganjilTerkecil([1])); // 1
console.log(ganjilTerkecil([92, 13, 12, 15, 10, 31, 15, 55, 32, 23, 45])); // 13