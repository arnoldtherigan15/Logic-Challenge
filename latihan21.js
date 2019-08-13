/*
   ==================
   Range Prime Number
   ==================
   [INSTRUCTION]
   jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
   yang mana prime[0] = 2;
   maka :
   [EXAMPLE]
   jika 10 angka prime pertama : [2,3,5,7,11,13,17,19,23,29]
   jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
   diberikan 2 parameter "start","finish"
   "start" yaitu index angka prime yang ditentukan.
   "finish" yaitu batas index angka prime
   hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array
*/
function primeNumber (start,finish) {
    var angka = [];
    var batas = 1000;
    var count = 1;
    var angkaPrima = [];
    var result = [];
    for (var i = 2; i <= batas; i++) {
        angka.push(i);
    }
    for (var j = 0; j <= batas; j++) {
        for (var k = 2; k <= batas; k++) {
            if (angka[j] % k === 0) {
                count++;
            }
        }
        if (count === 2) {
            angkaPrima.push(angka[j]);
        }
        count = 1;
    }
    for (start; start < finish; start++) {
        result.push(angkaPrima[start]);
    }
    return result;
}
console.log(primeNumber(5,10));