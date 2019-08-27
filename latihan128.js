// Final Live Coding Week 6 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
========
MARATHON
========
[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;
[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'
['XXXX', 'XX', 'OO', O-XXOOXXXXXOO-XXXXO']
[-1,   3]
'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina
partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18
[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode
*/

function marathon (track, stamina) {
    var countX = 0;
    var countO = 0;
    // var countDash = 0;
    var kurang = stamina;
    for (var i = 0; i < track.length; i++) {
        if (track[i] === 'X') {
            countX++;
            if (countX === 4) {
                kurang -= 1;
                countX = 0;
            } else if (countX <4 && track[i+1] != 'X') {
                kurang -= 1;
                countX = 0;
            }
        } else if (track[i] === '-') {
            kurang += 2;
        } else if (track[i] === 'O') {
            countO++;
            if (countO === 2) {
                kurang -= 1;
                countO = 0;
            } else if (countO <=2 && track[i+1] != 'O') {
                kurang -= 1;
                countO = 0;
            }
        }
        if (kurang === 0) {
            return `Selamat anda telah menempuh jarak ${i+1} km`
        } 
    }
    if (kurang > 0) {
        return 'Selamat anda telah menempuh garis finish'
    }
}

console.log(marathon('XOX', 2)) // Selamat anda telah menempuh jarak 18 km
console.log(marathon('XXXXXXOOOXXOOXXXXXOOXXXXO', 5)) // Selamat anda telah menempuh jarak 11 km
console.log(marathon('XXXXXXXX', 3)) // Selamat anda telah menempuh garis finish