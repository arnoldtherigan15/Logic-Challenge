/*
============
dataSiswa
============

[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.

Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.


[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"
2. Diasumsikan tidak ada siswa yang memperoleh nilai yang sama

[RULES]
2. Dilarang menggunakan built-in split

*/


function dataSiswa(scoreRecord) {
    var student = '';
    var students = [];
    var result = [];
    if (scoreRecord.length === 0) {
        return 'tidak ada catatan hasil tes hari ini';
    }
    // split untuk tanda koma
    for (var i = 0; i < scoreRecord.length; i++) {
        if (scoreRecord[i] === ',') {
            students.push(student);
            student = '';
        } else if (i === scoreRecord.length - 1) {
            student += scoreRecord[i];
            students.push(student);
        } else {
            student += scoreRecord[i];
        }
    }
    // split untuk tanda -
    var persons = [[]];
    var person = '';
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < students[i].length; j++) {
            if (students[i][j] === '-') {
                persons[i].push(person);
                person = '';
            } else if (j === students[i].length - 1) {
                person += students[i][j];
                persons[i].push(person);
                person = '';

            } else {
                person += students[i][j];
            }
        }
        if (i === students.length - 1) {
            break;
        }
        persons.push([]);

    }
    for (var i = 0; i < persons.length; i++) {
        var newObject = {
            id: persons[i][0],
            name: persons[i][1],
            score: persons[i][2]
        }
        result.push(newObject);
    }
    return result;
}


console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
/* 
[
  { id: '001', name: 'Radith', score: 5 },
  { id: '002', name: 'Putra', score: 92 },
  { id: '003', name: 'Levy', score: 100 }
]
 */

console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 70 },
  { id: '003', name: 'Levy', score: 65 },
  { id: '004', name: 'Radinka', score: 88 },
  { id: '005', name: 'Bagas', score: 90 }
]
 */

console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini