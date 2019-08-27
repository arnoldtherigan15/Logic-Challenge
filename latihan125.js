function angkaPalindrome(num) {
    num++;
    if (palindrome(num)) {
        return num;
    } else {
        if (palindrome(num) === false) {
            return angkaPalindrome(num++);
        }
    }
}
function palindrome (str) {
    // var isFind;
    var string = String(str);
    if (string.length === 0) {
        return true;
    } else {
        if (string[0] === string[string.length-1]) {
            return palindrome(string.slice(1,-1));
        } else {
            return false;
    
        }
    }
}
// var angka = 12345;
// console.log(String(angka).length);

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(121)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1001)); // 1001