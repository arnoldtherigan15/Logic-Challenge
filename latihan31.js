/*
==================================
Array Mastery: Love Me Not
==================================

Nama: ARNOLD THERIGAN

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)
*/

/*
Simpan variabel decisions dengan tipe data boolean
Return 'HE LOVES ME!' jika jumlah true > false
'HE DOES NOT LOVE ME :(' jika jumlah false < true
'GALAU' jika true=false

*/
function loveMeNot(decisions) {
    var arrTrue = [];
    var arrFalse = [];
    for (var i = 0; i < decisions.length; i++) {
        if(decisions[i] === true) {
            arrTrue.push(decisions[i]);
        } else {
            arrFalse.push(decisions[i])
        }
    }
    if (arrTrue.length > arrFalse.length) {
        return 'HE LOVES ME!';
    } else if (arrTrue.length < arrFalse.length) {
        return 'HE DOES NOT LOVE ME :(';
    } else {
        return 'GALAU';
    }
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("