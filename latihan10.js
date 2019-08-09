var input = [1,2,3,4,5,6,['active','bold','classic','daring']];
var hasil = [];
var indeks = 0;
for (var i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
        if (typeof input[i] === 'number') {
            hasil.push(input[i]);
        }
        else if (typeof input[i] != 'number') {
            for (var j = 0; j < input[i].length; j++) {
                if (j % 2 === 0) {
                    hasil.push([]);

                    for (var k = 0; k < input[i][j].length; k++) {
                        if (k % 2 === 0) {

                            hasil[hasil.length-1].push(input[i][j][k]);
                        }
                }
                }
            }
        }
        // hasil.push(input[i]);
    }
}
console.log(hasil);