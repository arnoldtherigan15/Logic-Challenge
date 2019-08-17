/*
 * Array of Object
 * ----------------------------
 * Buatlah code validation untuk setiap user yang terdaftar
 * code validation merupakan hasil dari pertukaran karakter indexk ganjil dan genap dari nama user
 * ditambah tanggal bulan dan tahun join. Jika index huruf terakhir adalah genap maka tidak memiliki pasangan
 * maka huruf terakhir tersebut tidak mengalami proses pertukaran.
 *
 * contoh
 *  user aldo join pada 22 08 2018 maka validation codenya laod22092018
 */

function addValidationCode(users) {
    var result = [];
    var nameArr = [];
    var dateArr = [];
    for (var i = 0; i < users.length; i++) {
        nameArr.push(users[i]['name'].split(''));
        dateArr.push(users[i]['join date'].split('-'))
    }
    for (var j = 0; j < nameArr.length; j++) {
        var newObject = {};
        for (var k = 0; k < nameArr[j].length; k++) {
            if (k % 2 === 0) {
                var tampung = nameArr[j][k];
                nameArr[j][k] = nameArr[j][k + 1];
                nameArr[j][k + 1] = tampung;
            }
            if (nameArr[j][k] === undefined) {
                nameArr[j].splice(k, 1);
            }
        }
        newObject.name = users[j].name;
        newObject.validationCode = nameArr[j].join('') + dateArr[j].join('');
        result.push(newObject);
    }
    return result;
}

//Test case
console.log(addValidationCode([
  {
    name: 'Antonio',
    'join date': '09-08-2018'
  },
  {
    name: 'Banderaz',
    'join date': '10-08-2018'
  },
]));
/**
 Hasil Output
 [
  {
    name: 'Antonio',
    validationCode: 'nAotino09082018'
  },
  {
    name: 'Banderaz',
    validationCode: 'aBdnreza10082018'
  },
]
 */
console.log(addValidationCode([
  {
    name: 'Cecile',
    'join date': '01-02-2018'
  },
  {
    name: 'Dominique',
    'join date': '10-09-2018'
  },
]));
/**
 Hasil Output
 [
  {
    name: 'Cecile',
    validationCode: 'eCicel01022018'
  },
  {
    name: 'Dominique',
    validationCode: 'oDiminuqe10092018'
  },
]
 */
console.log(addValidationCode([]));
/**
 Hasil Output
 []
 */
