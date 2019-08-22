// 2) 
// input: [ 2, 7, 2, 7, 7, 2, 5 ] 
// output: 3

function jarakTerdekat (arr) {
    var arrSort = [];
    for (var i = 0; i < arr.length; i++) {
        arrSort.push(arr[i]);
    }
    for (var i = 0; i < arrSort.length; i++) {
        for (var j = i+1; j < arrSort.length; j++) {
            if (arrSort[i] > arrSort[j]) {
                [arrSort[i],arrSort[j]] = [arrSort[j],arrSort[i]]
            }
        }
    }
    var angkaTerkecil = arrSort[0];
    var selisih = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === angkaTerkecil) {
            selisih.push(i)
        }
    }
    var hasilSelisih = [];
    for (var i = 0; i < selisih.length; i++) {
        var currentAngka = selisih[i];
        hasilSelisih.push(Math.abs(currentAngka-selisih[i+1]));
    }
    
    return hasilSelisih[hasilSelisih.length-2];
}
console.log(jarakTerdekat([ 2, 7, 2, 7, 7, 2, 5 ]));