/*
    ==================
    Range Prime Number
    ==================

    [INSTRUCTION]
    jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
    yang mana prime[0] = 2; 
    maka :
    
    [EXAMPLE]
    jika 10 angka prime pertama : [2,3,5,7,11,13,17,19,23,29,31]
    jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
    
    diberikan 2 parameter "start","finish"
    "start" yaitu index angka prime yang ditentukan.  
    "finish" yaitu batas index angka prime 

    hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array

*/

function rangePrimeNumber(start,finish) {
var batas = 100;
var count = 1;
var number = [];
var primeNumber = [];
var result = [];
for (var i = 2; i <= batas; i++) {
    number.push(i);
}

for (var j = 0; j <= batas; j++) {
    for (var k = 2; k <= batas; k++) {
        if (number[j] % k === 0) {
            count++;
        }
    } 
    if (count === 2) {
        primeNumber.push(number[j]);
    }
    count = 1;
}
for (start; start < finish; start++) {
    result.push(primeNumber[start]);
}
return result;
}


console.log(rangePrimeNumber(4,11));
// [11,13,17,19,23,29,31]
// output 
// [11,13,17,19,23,29]

// console.log(rangePrimeNumber(4,9));
// // output [7,11,13,17,19,23]

// var num = [];
// var batas = 15;
// // prima
// var bilanganPrima = [];
// var count = 1;
// for (var i = 2; i <= batas; i++) {
//     num.push(i);
// }

// console.log(num);
// for (var j = 0; j < num.length; j++) { // indeks
//     for (var k = 2; k < num[j]; k++) {
//         if (num[j] % k === 0) {
//             count++;
//         }
//     }
//     count = 1;
//     if (count === 2) {
//         bilanganPrima.push(num[j]);
        
//     }
    
// }
// console.log(bilanganPrima);