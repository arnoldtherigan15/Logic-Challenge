function circularOperation(num) {
    // num.unshift(0);
    // // var genap = 0;
    // // var ganjil = 0;
    var hasil = 0;
    console.log(num);
    for (var i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            hasil += num[i];
            // console.log(genap);
        } else {
            hasil -= num[i];
            // console.log(ganjil);
        }
        // hasil = genap + ganjil;
        // console.log(hasil);
    }
    return hasil;
}
console.log(circularOperation([1,2,3,4,5]));