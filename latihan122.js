// INPUT:
function dataSiswa(students) {
    var result = [
                    {
                        rangeAge: '10-20',
                        Facebook: [],
                        TikTok: [],
                        Instagram: [],
                        Twitter: []
                    },
                    {
                        rangeAge: '20-~',
                        Facebook: [],
                        Instagram: [],
                        Twitter: []
                    }
    ];
    for (var i = 0; i < students.length; i++) {
        if (students[i]['age'] <= 20) {
            for (var j = 0; j < students[i]['socialMedia'].length; j++) {
            result[0][students[i]['socialMedia'][j]].push(students[i]['name']);
            }
        }
        if (students[i]['age'] > 20) {
            for (var j = 0; j < students[i]['socialMedia'].length; j++) {
            result[1][students[i]['socialMedia'][j]].push(students[i]['name']);
            }
        }
    }
    return result;
}

var students = [ {
  name: 'Arnold',
  gender: 'Male',
  age: 22,
  socialMedia: ['Facebook', 'Instagram', 'Twitter']
}, {
  name: 'Alfred',
  gender: 'Male',
  age: 27,
  socialMedia: ['Instagram', 'Twitter']
}, {
  name: 'Risan',
  gender: 'Male',
  age: 27,
  socialMedia: ['Instagram']
}, {
  name: 'Eric',
  gender: 'Male',
  age: 15,
  socialMedia: ['Twitter', 'Facebook', 'TikTok']
}]
console.log(dataSiswa(students));
// OUTPUT: [
//   {
//     rangeAge: '10-20',
//     Facebook: [ 'Eric' ],
//     TikTok: ['Eric'],
//     Instagram: [],
//     Twitter: ['Eric']
//   },
//   {
//     rangeAge: '21-~',
//     Facebook: [ 'Arnold' ],
//     Instagram: [ 'Arnold', 'Alfred', 'Risan'],
//     Twitter: [ 'Arnold', 'Alfred' ]
//   }
// ]