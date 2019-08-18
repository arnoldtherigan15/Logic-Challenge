/*
================================
Array Mastery: Substract Evens and Odds
================================

[INSTRUKSI]

Function substractEvenOdd akan menerima satu parameter berupa array of number.
Kelompokkanlah hasil pengurangan bilangan yang genap dan bilangan yang ganjil dan
return array 2 dimensi di mana array pertama merupakan hasil pengurangan angka genap dan
array selanjutnya adalah hasil pengurangan angka ganjil

Contoh:
input: [3, 5, 7, 8]
output: [[8], [-9]]

input: [14, 4, 6, 2]
output: [[2], [0]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!

*/

function substractEvenOdd(arrNum) {
    var result = [];
    var genap = [];
    var ganjil = [];
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            genap.push(arrNum[i]);
        } else {
            ganjil.push(arrNum[i]);
        }
    }
    var resultGenap = genap[0];
    var resultGanjil = ganjil[0];
    for (var j = 1; j < genap.length; j++) {
        resultGenap -= genap[j];
    }
    for (var j = 1; j < ganjil.length; j++) {
        resultGanjil -= ganjil[j];
    }
    if (resultGanjil === undefined && resultGenap === undefined) {
        result.push([0], [0]);
    } else if (resultGenap === undefined) {
        result.push([0], [resultGanjil]);
    } else if (resultGanjil === undefined) {
        result.push([resultGenap], [0]);
    } else {
        result.push([resultGenap], [resultGanjil]);
    }
    return result;
}
  
console.log(substractEvenOdd([3, 5, 7, 8])); // [ [8], [-9] ]

console.log(substractEvenOdd([14, 4, 6, 2])); // [ [2], [0] ]

console.log(substractEvenOdd([])); // [ [0], [0] ]
  