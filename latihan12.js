function targetTerdekat(arr) {
var indeksOfo = [];
var indeksOfx = [];
var arrResult = [];
var result = [];
var selisih = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indeksOfo.push(i);
        } else if (arr[i] === 'x') {
            indeksOfx.push(i);
        }
    }
    for (var j = 0; j < indeksOfx.length; j++) {
        if (indeksOfo[0] > indeksOfx[j]) {
            selisih = indeksOfo[0] - indeksOfx[j];
            arrResult.push(selisih);
        } else {
            selisih = indeksOfx[j] - indeksOfo[0];
            arrResult.push(selisih);
        }
    }
    for (var k =0; k < arrResult.length; k++) {
        if (arrResult[k] < arrResult[k+1]) {
            result.push(arrResult[k]);
        } else {
            result.push(arrResult[k+1]);
        }
    }
    result.sort();
    if (arr.indexOf('x') === -1) {
        return 0;
    }
 
    return result[0];
 
}
  
  // TEST CASES
console.log(targetTerdekat([' ', '', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2