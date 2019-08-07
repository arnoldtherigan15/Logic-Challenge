function palindrome(kata) {
    var kataBalik = '';
    var hasil = false;
    for (var i = kata.length - 1; i >= 0; i--) {
        kataBalik += kata[i];
    }
    if (kata === kataBalik) {
        hasil = true;
    }
    return hasil;
}
  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false