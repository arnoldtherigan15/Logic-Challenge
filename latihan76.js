function hitungAsrama (arr) {
    var temp = [];
    var count = [];
    for (var i = 0; i < arr.length; i++) {
        if (temp.length === 0) {
            temp.push(arr[i]);
            count.push(1);
        } else {
            var isFind = false;
            for (var j = 0; j < temp.length; j++) {
                if (temp[j] === arr[i]) {
                    isFind = true;
                    count[j] += 1;
                }
            }
            if (isFind === false) {
                temp.push(arr[i]);
                count.push(1);
            }
        }
    }
    var result = [];
    for (var i = 0; i < temp.length; i++) {
        var newObject = {
            asrama: ''
        };
        newObject['asrama'] = temp[i];
        result.push(newObject);
    }
    // console.log(temp);
    // console.log(count);
    return result;
}
console.log(hitungAsrama(['grif','grif','slyt']));
// output = 
// [
//     {asrama: grif, jumlah: 2},
//     {asrama: StyleSheet, jumlah:1}
// ]