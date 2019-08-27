function cekPrima(num) {
    var count = 0;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (num < 2 || count > 0) {
        return false;
    } else {
        return true;
    }
}
function cekPrima (num,pembagi) {
    // var count = 0;
    if (pembagi === 2) {
        return 2;
    }
    if (num === 2) {
        return 1;
    } else {
        if (num % pembagi === 0) {
            console.log(num);
            
            return 1 + cekPrima(num-1);
        }
        return cekPrima(num-1)
    }
}
console.log(cekPrima(12,11));
