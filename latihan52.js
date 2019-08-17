/*
===========
lotusRealms
===========
[INSTRUCTIONS]
lotusRealms adalah sebuah fungsi yang menerima parameter berupa array
of objects dan akan mengembalikan info siapa saja yang akan bertahan dari perang.
[EXAMPLE]
INPUT: [
  { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
  { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
  { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]
PROCESS:
  1. Serpent menyerang Samurai sebesar 300 => health Samurai menjadi 200
  2. Samurai menyerang Wolf sebesar 400 => health Wolf menjadi 200
  3. Wolf menyerang Serpent sebesar 300 => health Serpent menjadi 700
  4. Lotus menyerang Wolf sebesar 2000 => health Wolf menjadi -1800 dan Wolf gugur dalam realms
OUTPUT: [
  { clan: 'Serpent', totalHealth: 700 },
  { clan: 'Samurai', totalHealth: 200 },
  { clan: 'Lotus', totalHealth: 3000 }
]
[RULES]
  1. Diasumsikan pemenang akan selalu ada, dan clans tidak pernah kosong.
  2. Dilarang menggunakan built in function .filter(), .map(), .forEach(), dan .reduce()
*/

function lotusRealms(clans) {
    var result = [];
    var newArr = [];
    for (var i = 0; i < clans.length; i++) {
        newArr.push([
            clans[i].clan,
            clans[i].totalHealth
        ]);
    }
    // console.log(newArr);
    for (var j = 0; j < clans.length; j++) {
        for (var k = 0; k < newArr.length; k++) {
            if (clans[j].attack === newArr[k][0]) {
                newArr[k][1] -= clans[j].totalAttack;
            }
        }
    }
    // console.log(newArr);
    for (var l = 0; l < newArr.length; l++) {
        var newObject = {};
        if (newArr[l][1] > 0) {
            newObject.clan = newArr[l][0];
            newObject.totalHealth = newArr[l][1];
            result.push(newObject);
        }
    }
    return result;
}

console.log(lotusRealms([
    { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
    { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
    { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
    { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]))
/*
  [
    { clan: 'Serpent', totalHealth: 700 },
    { clan: 'Samurai', totalHealth: 200 },
    { clan: 'Lotus', totalHealth: 3000 }
  ]
*/

console.log(lotusRealms([
  { clan: 'Wolf', attack: 'Wolf', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]))
/*
  [ { clan: 'Lotus', totalHealth: 3000 } ]
*/