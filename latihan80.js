/*
=======================
INVENTARIS KERAN MASJID
=======================
[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu
[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output :
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
input: 'XX?XX?XX^XX'
output:
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'
input : 'XX?XX?XX'
output :
'Semua keran rusak'
[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr
// YOUR PSEUDOCODE/ALGORITHM HERE
*/

// input: 'XX^XX^XX^XX?XX^XX'
// output :
// 'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
function inventarisKeran (str) {
    var count= 0;
    var tempArrow = [];
    var tempQue = [];
    for (var i = 0; i < str.length; i++) {
        if(str[i] === '^') {
            count++;
            tempArrow.push(count);
        } else if (str[i] === '?') {
            count++;
            tempQue.push(count);
        }
    }
    var berjalan = tempArrow.length;
    var tidakJalan = tempQue.length;
    var resultBerhasil = tempArrow.join(',');
    var resultGagal = tempQue.join(',');
    if (tempQue.length === 0) {
        return 'Semua keran berjalan dengan baik';
    } else if (tempArrow.length === 0) {
        return 'Semua keran rusak';
    }
     else {
         return 'terdapat ' + berjalan + ' keran yang berjalan nomor(' + resultBerhasil + ') , dan ' + tidakJalan + ' keran rusak nomor (' + resultGagal + ')';
     }
}
console.log(inventarisKeran('XX^XX^XX^XX?XX^XX'));
console.log(inventarisKeran('XX?XX?XX^XX'));
console.log(inventarisKeran('XX^XX^XX'));
console.log(inventarisKeran('XX?XX?XX'));

// input: 'XX?XX?XX^XX'
// output:
// 'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
// input : 'XX^XX^XX'
// output :
// 'Semua keran berjalan dengan baik'
// input : 'XX?XX?XX'
// output :
// 'Semua keran rusak'