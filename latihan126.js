function pasanganTerbesar(num) {
    var angka = String(num)[0]+String(num)[1];
    if (String(num).length === 0) {
        return '';
    } else {
        pasanganTerbesar(String(num).slice(1));
    }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99