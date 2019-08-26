/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/
// function dividableRecursive (array, num) {
//   var temp = '';
//   for (var i = 0; i < array.length; i++) {
//     if(array[i] % num === 0) {
//       temp += array[i] + ' ';
//     }
//   }
//   return temp;
// }

function dividableRecursive (array, num) {
  if (array.length === 1) {
      return '';
  }
 else {
  if(array[0] % num === 0) {
    return String(array[0]) + ' ' + dividableRecursive(array.slice(1),num) ;
  }
  return dividableRecursive(array.slice(1),num);
}
}

// DRIVER CODE
console.log(dividableRecursive([66 , 33 , 55 , 44 , 11], 3)) // 66 33
// console.log(dividableRecursive([123 , 222 , 100 , 50 , 32], 2)) // 222 100 50 32
// console.log(dividableRecursive([125 , 500 , 201 , 202 , 66], 5)) // 125 500
// console.log(dividableRecursive([66 , 33 , 55 , 44 , 132], 6)) // 66 132
