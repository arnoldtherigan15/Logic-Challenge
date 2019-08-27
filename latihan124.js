function hitungKelipatan(numArr) {
    var kelipatan2 = 0;
    var kelipatan2dan3 = 0;
    var kelipatan3 = 0;
    for (var i = 0; i < numArr.length; i++) {
        for (var j = 0; j < numArr[i].length; j++) {
            if (numArr[i][j] % 2 === 0 && numArr[i][j] % 3 === 0 && numArr[i][j] !== 0) {
                kelipatan2dan3 += (numArr[i][j] + 100 - 5);
            } else if (numArr[i][j] % 2 === 0 || numArr[i][j] === 0) {
                kelipatan2 += ((numArr[i][j] + 5)*12)-100;
            } else if (numArr[i][j] % 3 === 0  && numArr[i][j] !== 0) {
                kelipatan3 += (numArr[i][j]*5)-30;
            }
        }
    }
    // console.log ('kelipatan 2&3 = ', numArr[i][j] );
    // console.log ('kelipatan 2 = ', numArr[i][j] );
    // console.log ('kelipatan 3 = ', numArr[i][j] );
    
    var result = [kelipatan3,kelipatan2,kelipatan2dan3];
    // var hasil = ['kelipatan 3 memiliki hasil ','kelipatan 2 memiliki hasil ', 'kelipatan 2 dan 3 memiliki hasil '];
    // console.log ('kelipatan 2 = ', kelipatan2 );
    // console.log ('kelipatan 2 & 3 = ', kelipatan2dan3 );
    // console.log ('kelipatan 3 = ', kelipatan3 );
    for(var i = 0; i < result.length; i++) {
        for (var j = i+1; j < result.length; j++) {
            if (result[i] < result[j]) {
                [result[i],result[j]] = [result[j],result[i]];
                // [hasil[i],hasil[j]] = [hasil[j],hasil[i]];
            }
        }
    }
    console.log(result);
    // console.log(hasil);
    var newObject = {
        'kelipatan 2': kelipatan2,
        'kelipatan 2 dan 3': kelipatan2dan3,
        'kelipatan 3': kelipatan3
    };
    var keys = Object.keys(newObject);
    // console.log(keys);
    // var res = '';
    // for (var i = 0; i < hasil.length; i++) {
    //     res += hasil[i] + result[i] + '\n';
    // }
    // console.log(res);
    for (var i = 0; i < result.length; i++) {
        for(var j = 0; j < keys.length; j++) {
           if(result[i] === newObject[keys[j]]) {
               console.log(keys[j] + ' memiliki hasil ' + result[i]);
               
           }
        }
    }
    // console.log(newObject);
    
    
}
var numArr = 
[
    [2,6,3,2,8,9,12],
    [4,24,12,54,100,30,35],
    [90,23,0,21,0,11,3],
    [86,21,43,27,99,77,55]
];
hitungKelipatan(numArr);
