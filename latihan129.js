
/*
=====================
DOUBLE REVERSE ARRAY
=====================
[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string,
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP
[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
    var reverseArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    console.log(reverseArr);

    for (var i = 0; i < reverseArr.length; i++) {
    var temp = '';

        if (reverseArr[i].length % 2 === 0) {
            for (var j = reverseArr.length - 1; j >= 0; j--) {
                temp += reverseArr[i][j];
            }
            reverseArr[i] = temp;
            
        }

    }
    return reverseArr;
    

}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']))
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']))
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']))
// [ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
// console.log(doubleReverse([]))
// invalid input parameter