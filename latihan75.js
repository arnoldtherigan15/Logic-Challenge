function hitungAsrama (arr) {
    var temp = [];
    var count = [[]];
    for (var i = 0; i < arr.length; i++) {
        if (temp.length === 0) {
            temp.push(arr[i]['asrama']);
            count[i].push([arr[i]['nama'],arr[i]['nilai']]);
        } else {
            var isFind = false;
            for (var j = 0; j < temp.length; j++) {
                if (temp[j].toLowerCase() === arr[i]['asrama'].toLowerCase()) {
                    isFind = true;
                    count[j].push([arr[i]['nama'],arr[i]['nilai']]);
                }
            }
            if (isFind === false) {
                temp.push(arr[i]['asrama']);
               
                count.push([]);
                count[j].push([arr[i]['nama'],arr[i]['nilai']]);
            }
        }
    }
    var result = [];
    for (var i = 0; i < count.length; i++) {
           var newObject = {
            asrama: '',
            gagal: [],
            lulus: []
        };
        for (var j = 0; j < count[i].length; j++) {
            if (count[i][j][1] >= 70) {
                   newObject.asrama = temp[i];
                   newObject['lulus'].push(count[i][j][0]);
                } else {
                    newObject.asrama = temp[i];
                   newObject['gagal'].push(count[i][j][0]);
                }
        }
        result.push(newObject);
    }
    return result;
}

var data = [
    { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
    { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
    { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
    { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
    { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
    { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
    { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
    { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
  ];
console.log(hitungAsrama(data));