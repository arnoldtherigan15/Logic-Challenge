function hitungJumlahKata(kalimat) {
    if (kalimat.length === 1) {
        return 1;
    } else {
        if (kalimat[0] === ' ') {
            return 1 + hitungJumlahKata(kalimat.slice(1));
        }
        return hitungJumlahKata(kalimat.slice(1));
    }
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5