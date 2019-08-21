// 1)
//
// buat algoritma nya juga
//
// input: 4 (minimum 3, maksimal 6)
//
// |----|
// |    |
// |    |
// |----|
//
// input: 3
// |---|
// |   |
// |---|
//

/*
Algoritma

DECLARATION a FUNCTION NAMED 'kotak'
WITH A PROCESS
    STORE 'res' with ""
    
*/
function kotak(num) {
    var res = '';
    if (num < 3 || num > 6) {
        return 'minimum 3, maksimal 6';
    }
    var dash = '';
    var space = '';
    for (var i = 0; i < num; i++) {
        dash += '-';
        space += ' ';
    }
    for (var i = 0; i < num; i++) {
        res += '|';
        if (i === 0 || i === num - 1) {
            res += dash;
            res += '|';
        } else {
            res += space;
            res += '|';
        }
        res += '\n';
    }
    return res;
}
console.log(kotak(3));
console.log(kotak(4));
console.log(kotak(5));
console.log(kotak(7));