/**
Implementasikan function formatDuration() yang akan menerima satu parameter yaitu jumlah detik
dan akan mengembalikan string berupa detik yang sudah di-format supaya bisa dibaca oleh manusia
Function ini hanya menerima angka yang tidak negatif (0..MAX INTEGER). Jika angka adalah 0, maka
function akan mengembalikan string "Sekarang". Jika tidak, maka akan mengembalikan durasi yang
sudah di-format (kombinasi JAM, MENIT DAN DETIK).
Contoh:
  formatDuration(62)    // "1 menit 2 detik"
  formatDuration(3665)  //  "1 jam 1 menit 5 detik"
  formatDuration(60) // "1 menit 0 detik"
NOTE: Tidak masalah jika 0 detik ditampilkan.
*/


function recursiveFormatDuration (seconds) {
  var modulus = 0;
  var angka = 0;
  var jam;
  var menit;
  var detik;
    if (seconds >= 3600) {
      modulus = seconds % 3600;
      jam = Math.floor(seconds/3600) + ' jam ';
    } else {
      modulus = seconds;
    }
    if (modulus >= 60) {
      angka = modulus % 60;
      menit = Math.floor(modulus/60) + ' menit ';
    }
    detik = angka + ' detik';
    if (jam != undefined && menit != undefined && detik != undefined) {
      return jam + menit + detik;
    } else if (jam === undefined && menit != undefined) {
      return menit + detik;
    } else if (jam === undefined && menit === undefined) {
      return detik;
    }
    
}
      
console.log(recursiveFormatDuration(7324)); // 2 jam 2 menit 4 detik
console.log(recursiveFormatDuration(62)); // 1 menit 2 detik
console.log(recursiveFormatDuration(0)); // 0 detik
console.log(recursiveFormatDuration(3660)); // 1 jam 1 menit 0 detik
  