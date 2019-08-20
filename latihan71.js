function sorting(arrNumber) {
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] > arrNumber[j+1]) {
                var temp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = temp;
            }
        }
    }
    return arrNumber;
}


function getTotal(arrNumber) {
    sorting(arrNumber);
    var modusArr = [];
    for (var i = 0; i < arrNumber.length; i++) {  
        if (modusArr.length === 0 || arrNumber[i] != modusArr[modusArr.length-1]) {
            modusArr.push([]); 
            modusArr[modusArr.length-1].push(arrNumber[i]);            
        } else {
            modusArr[modusArr.length-1].push(arrNumber[i]);   
        }
        
    }
   console.log(modusArr.length);
    return modusArr;
}

console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));