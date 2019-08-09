// function groupAnimals(animals) {
//     animals.sort();
//     var result = [];
//     for (var i = 0; i < animals.length; i++) {
//         if (result.length === 0) {
//             result.push([animals[i]]);
//         } else if (result[result.length-1][0][0] === animals[i][0]) {
//             result[result.length-1].push(animals[i]);
//         } else {
//             result.push([]);
//             result[result.length-1].push(animals[i]);
//         }
//     }
//     return result;
// }
// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

function targetTerdekat(arr) {
    var mencariO = arr.indexOf('o');
    var selisihOX = 0; //lookingO-i
    var realJarak = arr.length; //return hasil
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            selisihOX = Math.abs(mencariO - i);
            if (selisihOX < realJarak) {
                realJarak = selisihOX;
            }
        }
    }
    if (arr.indexOf('x') === -1) {
        return 0;
    }
    return realJarak;
}
  // TEST CASES
// console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
// console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', 'x', '', '0', 'x', 'x', ''])); // 1
// console.log(targetTerdekat(['', '', 'o', ''])); // 0
// console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2