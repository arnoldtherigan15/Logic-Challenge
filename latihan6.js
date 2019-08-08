function hitungJumlahKata(kalimat) {
    var kalimatArr = kalimat.split(' ');
    for (var i = kalimatArr.length; i > 0; i--) {
        if (kalimatArr[i] === '') {
            kalimatArr.splice(i, 1);
        }
    }
    return kalimatArr.length;
}
  
// TEST CASES
console.log(hitungJumlahKata('halo   arnold'));
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5