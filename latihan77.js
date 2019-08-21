function tangga (num) {
    var result = '';
    for (var i = num; i > 0; i--) {
        for(var j = i; j > 0; j--) {
            // console.log('\n');

            result += j;
        }
        result += '\n';
    }
    return result;
}
function kolom (num) {
    if (num === 1) {
        return 1;
    } else {
        return String(num) + kolom(num -1);
    }
}
function tanggaRekursif (num) {
    if (num === 1) {
        return 1;
    } else {
        return (kolom(num) + '\n') + tanggaRekursif(num-1);
    }
}
console.log(tanggaRekursif(3));
// 321
// 21
// 1