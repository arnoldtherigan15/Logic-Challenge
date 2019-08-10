/*
==================================
Array Mastery: Love Me Not
==================================

Nama:SEPTIAN MAULANA

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". 
Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)
*/

/*
Simpan variabel decisions dengan tipe data boolean
Return 'HE LOVES ME!' jika jumlah true > false
'HE DOES NOT LOVE ME :(' jika jumlah false < true
'GALAU' jika true=false

*/

function loveMeNot (decisions) {
    var countTrue = 0;
    var countFalse = 0;
    for (var i = 0; i < decisions.length; i++) {
        if (decisions[i] === true) {
            countTrue++;
        } else {
            countFalse++;
        }
    }
    if (countTrue > countFalse) {
        return 'HE LOVES ME!';
    } else if (countTrue === countFalse) {
        return 'GALAU'
    } else {
        return 'HE DOES NOT LOVE ME :('
    }
}
console.log(loveMeNot([true,false,true,false,true])); //HE LOVES ME
console.log(loveMeNot([true,false,false,true])); // GALAU
console.log(loveMeNot([true,false,false,false,true])); // HE DOES NOT LOVE ME :(