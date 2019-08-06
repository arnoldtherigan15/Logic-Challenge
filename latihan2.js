// var studets = ['arnold', 'eli', 'robi', 'bram', 'dimas', 'devita'];
// studets.push('risan');
// studets.pop();
// studets.unshift('evan');
// studets.shift();
// hasil = studets.slice(1,3);
// studets.splice(1,2,'kevin','gusti');
// split = studets[0].split('');
// studets.unshift(split);
// console.log(studets);

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling (input) {
    var result = '';
    for (var i = 0; i < input.length; i++) {
        console.log('Nomor ID: ' + input[i][0]);
        console.log('Nama Lengkap: ' + input[i][1]);
        console.log('TTL: '+ input[i][2]);
        console.log('Hobi: '+ input[i][3] + '\n');
    }
    return result;
}
console.log(dataHandling(input));