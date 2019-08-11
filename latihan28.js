function prima(num) {
    var count = 1;
    for (var i = 2; i <= num; i++) {
        if (num % i === 0) {
            count++;
        } 
    }
    if (count === 2) {
        return 'prima';
    } else {
        return 'bukan prima';
    }
}
console.log(prima(14));