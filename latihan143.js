// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *

contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!

[RULE]
- WAJIB menggunakan pseudocode

*/

function drawSymbolicColsBox(num) {
    var number = 1;
    for (var i = 0; i < num; i++) {
        var temp = '';
        for (var j = 1; j <= num; j++) {
           if (number % 2 === 0 && number % 3 != 0) {
            temp += '$' +' ';
            number++;
           } else if (number % 3 === 0) {
            temp += '*'+' ';
            number++;
           } else {
            temp += '@'+' ';
            number++;
           }
        }
        console.log(temp);
    }
}


drawSymbolicColsBox(3);
console.log('');

drawSymbolicColsBox(5);
console.log('');
drawSymbolicColsBox(1);