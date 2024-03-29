/*
==================================
Array Mastery: Pair Up
==================================

Nama:SEPTIAN MAULANA

[INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.

Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, 
student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']

input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']

input: []
output: []

*/

/*
Simpan variabel Students berupa array dengan tipe data string
Return 2 nama dalam bentuk gabungan array dengan kata hubung 'dan'
Jika tidak habis dibagi 2 maka sisanya students berpasangan dengan Instruktur
*/

function pairUp (students) {
    var pairUpresult = [];
    if (students.length % 2 != 0) {
        students.push('Instruktur');
    }
    for (var i = 0; i < students.length; i++) {
        pairUpresult.push(students[i] + ' dan ' + students[i+1]);
        i++;
    }
    return pairUpresult;
}
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri']));
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'james']));
console.log(pairUp([]));
console.log(pairUp(['arnold','risan','devita','elisabeth','bram','roby','evans']));