// 3)
// input: 'saya naik civic sambil menatap katak'
// output: {
//   palindrome: ['civic', 'katak'],
//   nonPalindrome: ['saya', 'naik', 'sambil', 'menatap']
// }

function cekPalindrome(str) {
    var arr = str.split(' ');
    var balikKata = [];
    var arrPalindrome = [];
    var arrNonpalindrome = [];
    for (var i = 0; i < arr.length; i++) {
        var tampung = '';
        for (var j = arr[i].length - 1; j >= 0; j--) {
            tampung += arr[i][j];
        }
        balikKata.push(tampung);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === balikKata[i]) {
            arrPalindrome.push(arr[i]);
        } else {
            arrNonpalindrome.push(arr[i]);
        }
    }
    var result = {
        palindrome: arrPalindrome,
        nonPalindrome: arrNonpalindrome
    }
    return result;
}
console.log(cekPalindrome('saya naik civic sambil menatap katak'));

// output: {
//   palindrome: ['civic', 'katak'],
//   nonPalindrome: ['saya', 'naik', 'sambil', 'menatap']
// }