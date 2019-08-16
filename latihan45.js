function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var indesk1 = 0;
    var indesk2 = 0;
    var result = [];
    var total = 0;
    for (var i = 0; i < arrPenumpang.length; i++) {
        var object = {};
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                indesk1 = j+1;
            } else if (arrPenumpang[i][2] === rute[j]) {
                indesk2 = j+1;
            }
            total = (indesk2 - indesk1)*2000;
        }
    
        object.penumpang = arrPenumpang[i][0];
        object.naikDari = arrPenumpang[i][1];
        object.tujuan = arrPenumpang[i][2];
        object.bayar = total;
        result.push(object);
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]