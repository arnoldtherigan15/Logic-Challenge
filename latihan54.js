/*
=====================================
Modular Functions: Calculate Number in Object
=====================================
[INSTRUKSI]
Diberikan function kali, tambah, bagi, kurang, dan calculate
Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, operator perhitungan 
tersedia di dalam object.
ASUMSI:
- keyName operand1, operand2 dan operator selalu ada
- value dari operand1 dan operand2 selalu number
- value dari operator berupa string: '+', '-', '*' atau '/'
Function calculate akan me-return sebuah array yang berisi hasil perhitungan dari object tersebut.
contoh 1:
input: [ {
             operand1: 5,
             operand2: 10,
             operator: '*'
           },
           {
             operand1: 3,
             operand2: 10,
             operator: '-'
           },
           {
             operand1: 3,
             operand2: 10,
             operator: '/'
           }
         ];
output: [50, -7, 0.3]
contoh 2:
input: []
output: []
*/

function kali (operand1,operand2) {
   
    return operand1 * operand2;
}
function tambah (operand1,operand2) {
    return operand1 + operand2
}
function kurang (operand1,operand2) {
    return operand1 - operand2
}
function bagi (operand1,operand2) {
    return operand1 / operand2
}
function calculate (numbers) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i].operator === '*') {
            result.push(kali(numbers[i].operand1,numbers[i].operand2));
        } else if (numbers[i].operator === '+') {
            result.push(tambah(numbers[i].operand1,numbers[i].operand2));
        } else if (numbers[i].operator === '-') {
            result.push(kurang(numbers[i].operand1,numbers[i].operand2));
        } else if (numbers[i].operator === '/') {
            result.push(bagi(numbers[i].operand1,numbers[i].operand2));
        }
    }
    
    return result;
}
// TEST CASE
console.log(calculate([ {
    operand1: 5,
    operand2: 10,
    operator: '*'
  },
  {
    operand1: 3,
    operand2: 10,
    operator: '-'
  },
  {
    operand1: 3,
    operand2: 10,
    operator: '/'
  }
]));
// output: [50, -7, 0.3]