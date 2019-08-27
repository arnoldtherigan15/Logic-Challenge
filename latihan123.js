function palindrome (str) {
    var isFind = false;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[str.length-1-i]) {
            isFind = true;
        } else {
            isFind = false;
            break;
        }
    }
    return isFind;
}
function palindrome (str) {
    // var isFind;
    if (str.length === 0) {
        return true;
    } else {
        if (str[0] === str[str.length-1]) {
            return palindrome(str.slice(1,-1));
        } else {
            return false;
    
        }
    }
}

// console.log(kata.slice(1,-1))
console.log(palindrome('arnold'));
console.log(palindrome('civic'));