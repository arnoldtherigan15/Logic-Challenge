// input: [ { name: "A", pos: 3}, { name: "B", pos: 2}], 5
// Output
// [
//   ['', '', 'A', '', ''],
//   ['', 'B', '', '', '']
// ]
// input: [ { name: "A", pos: 3}, { name: "B", pos: 7}, { name: "C", pos: -10}], 5
// Output
// [
//   ['', '', 'A', '', ''],
//   ['', '', '', '', 'B'],
//   ['C', '', '', '', '']
// ]

function playerPosition (arr,cols) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push([]);

        for (var j = 1; j <= cols; j++) {
            if (j === arr[i]['pos']) {
                result[i].push(arr[i]['name']);
            } else {
                result[i].push(' ');
            }
        }
        if (arr[i]['pos'] > cols) {
            result[i][cols-1] = arr[i]['name'];
        } else if (arr[i]['pos'] < 1) {
            result[i][0] = arr[i]['name'];
        }
    }
    return result;
}
console.log(playerPosition([ { name: "A", pos: 3}, { name: "B", pos: 2}], 5));
console.log('');
console.log(playerPosition([ { name: "A", pos: 3}, { name: "B", pos: 5}, { name: "C", pos: 1}], 5));
console.log('');
console.log(playerPosition([ { name: "A", pos: 3}, { name: "B", pos: 7}, { name: "C", pos: -10}], 5));