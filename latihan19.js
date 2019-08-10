var angka = [1,5,2,30,17,18];
for (var i = 0; i < angka.length; i++) {
    if (angka[i] > angka [i+1]) {
        var tampung = angka[i];
        angka[i] = angka[i+1];
        angka[i+1] = tampung;
    }
}
console.log(angka);