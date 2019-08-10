var angka = [1,30,6,13,8,20];
for (var i = 0; i < angka.length; i++) {
    if (angka[i] > angka [i+1]) {
        var tampung = angka[i];
        angka[i] = angka[i+1];
        angka[i+1] = tampung;
        tampung = angka[i];
    }
    
}
console.log(angka);