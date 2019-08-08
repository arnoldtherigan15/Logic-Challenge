function angkaPalindrome(num) {
    while (true) {
        num++;
        var angkaString = String(num);
        var angkaBalik = '';
        for (var i = angkaString.length - 1; i >= 0; i--) {
            angkaBalik += angkaString[i];
        }
        if (angkaBalik === angkaString) {
            return angkaString;
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(22)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001