/*
===============
Shortest Word
===============

[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex

[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/

function shortestWords(words) {
    var result = [];
    var temp = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i] === ' ') {
            result.push(temp);
            temp = '';
        } else {
            temp += words[i]
        }
        if (i === words.length - 1) {
            result.push(temp);
        }
    }
    for (var i = 0; i < result.length; i++) {
        for (var j = i + 1; j < result.length; j++) {
            if (result[i].length > result[j].length) {
                [
                    result[i], result[j]
                ] = [
                    result[j], result[i]
                ];
            }
        }
    }
    var kataTerpendek = [];
    for (var i = 0; i < result.length; i++) {
        if (result[i].length === result[0].length) {
            kataTerpendek.push(result[i]);
        }
    }
    var resultFilter = [];
    resultFilter.push(kataTerpendek[0]);
    for (var i = 0; i < kataTerpendek.length; i++) {
        var isDuplikat = false;
        for (var j = 0; j < resultFilter.length; j++) {
            if (resultFilter[j].toLowerCase() === kataTerpendek[i].toLowerCase()) {
                isDuplikat = true;
            }
        }
        if (isDuplikat === false) {
            resultFilter.push(kataTerpendek[i]);
        }
    }
    return resultFilter;
}

// TEST CASE

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!'] 
console.log(shortestWords('I am diligent')); // ['I']
console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')); // ['kita', 'saja']