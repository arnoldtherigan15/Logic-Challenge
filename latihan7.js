// function pasanganTerbesar(num) {
    
//     for (var i = 0; i < num.length; i++) {
//     var numArray = String(num);
//     numArray.slice(i,2+i);
//     console.log(numArray);
//     }
    
//   }
  
  // TEST CASES
//   console.log(pasanganTerbesar(641573)); // 73
//   console.log(pasanganTerbesar(12783456)); // 83
//   console.log(pasanganTerbesar(910233)); // 91
//   console.log(pasanganTerbesar(71856421)); // 85
//   console.log(pasanganTerbesar(79918293)); // 99


var num = 19451;
var numString = String(num);
var arrNum = [];
var pasangan = numString[0] + numString[1];
for (var i = 0; i < numString.length - 1; i++) {
    var pasangan = numString[i] + numString[i + 1];
    arrNum.push(Number(pasangan));
    var pembanding = 0;
    for (var j = 0; j < arrNum.length; j++) {
        if (arrNum[j] > pembanding) {
            pembanding = arrNum[j];
        }
    }
}
console.log(pembanding);