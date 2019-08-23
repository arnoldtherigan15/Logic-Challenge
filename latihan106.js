// input:
// [
//   ['2', '3', '4'],
//   ['5', '7', '11'],
//   ['2', '13', '23']
// ]
// output:
// 3
// penjelasan: cari prima di dalam blok 2x2
function hitungGanjil (arr) {
    var angka
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] % 2&& arr[i][j+1])
        }
    }
}
var cari = [
            ['2', '3', '4'],
            ['5', '7', '11'],
            ['2', '13', '23']
           ];
console.log(hitungGanjil(cari));