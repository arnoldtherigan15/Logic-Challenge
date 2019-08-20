function duplicateDetector(arr) {
    var temp = [];
    var count = [];
   
    for (var i = 0; i < arr.length; i++) {
        if (temp.length === 0 && count.length === 0) {
            temp.push(arr[i]);
            count.push(1);
        } else {
            var isFind = false;
            for (var j = 0; j < temp.length; j++) {
                if (arr[i].toLowerCase() === temp[j].toLowerCase()) {
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
    // console.log(temp);
    // console.log(count);
    var result = {
        duplicate: [],
        single: []
    };
    for (var i = 0; i < temp.length; i++) {
        if (count[i] > 1) {
            result['duplicate'].push(temp[i]);
        } else {
            result['single'].push(temp[i]);
        }
    }
    return result;
}

console.log(duplicateDetector(['a','A','b','a','c','B']));