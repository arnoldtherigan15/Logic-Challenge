function hitungKata(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
    var isFind = false;
        if (str[i] === ' ') {
            isFind = true;
            if(i === 0 || str[i+1] === ' ') {
                isFind =false;
            }

        }
        if (i === str.length-1) {
            if(str[i] === ' ') {
                isFind =false;
            }
            count++;
        }
        if (isFind === true) {
            count++;

        }

    }
    return count;
}
console.log(hitungKata(' I have a dream a   song to    sing     '));