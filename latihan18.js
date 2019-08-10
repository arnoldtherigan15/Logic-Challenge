function pasanganTerbesar(num) {
    var string = String(num);
    var array = string.split('');
    var arrayBaru = [];
    for (var i = 0; i < array.length - 1; i++) {
        arrayBaru.push(Number(array[i] + array[i + 1]));
    }
    arrayBaru.sort();
    return arrayBaru[arrayBaru.length - 1];
}
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99