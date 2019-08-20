// 1)
// input:
// ['halo', 'Halo', 'bandung', 'ibu', 'IbU'];
// output: //tampilkan yang duplicate tapi satu kali saja 
// 'halo', 'ibu' 

function duplikat (arr) {
    var result = [];
   
    for (var i = 0; i < arr.length; i++) {
        var count = 1;
        if (result.length === 0) {
            result.push(arr[i]);
        } else {
            var isFind = false;
            for (var j = 0; j < result.length; j++)  {
            
                if (result[j].toLowerCase() === arr[i].toLowerCase()) {
                    isFind = true;
                }
            }
            if(isFind === false) {
                result.push(arr[i]);
                // isFind = false;
            }
        }
        
    }
    return result;
}
console.log(duplikat(['A', 'A', 'c', 'a', 'B','b','a']));