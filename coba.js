/*
STORE ANGKA WITH ANY VALUE
STORE i EQUALS TO 2
STORE HASIL WITH ANY VALUE
WHILE ANGKA MORE THAN i 
    IF ANGKA MOD i EQUALS TO 0
        SET HASIL WITH FALSE
        STOP LOOP (break)
    END IF
    ADD i with 1
END WHILE
SET HASIL WITH TRUE
IF HASIL EQUALS TO TRUE
    DISPLAY 'adalah bilangan prima'
ELSE
    DISPLAY 'bukan bilangan prima'
END IF

*/

// var angka = 3;
// var i = 2;
// var hasil = true;
// while (angka > i) {
//     if (angka % i === 0) {
//         hasil = false;
//         break;
//     }
//     i++;
// }

// if (hasil === true) {
//     console.log('adalah bilangan prima');
// } else {
//     console.log('bukan bilangan prima');
// }


/*
STORE 'kata' WITH ANY VALUE
STORE i WITH 0
FOR i LESS THAN Jumlah Kata
    IF i MODULUS 2 EQUALS TO 0
        DISPLAY 'kata[i]'
    END IF
END FOR

*/



// var kata = 'arnold therigan';
// var kataBaru = '';
// for (var i = 0; i < kata.length; i++) {
//     if (i % 2 === 0) {
//          kata[i];
        
//     }
// }
// console.log(kata[i]);
var height = 5;
for (var i = 0; i <= height; i++) {
    var hasil = '';
    for (var j = 1; j <= i; j++) {
        hasil = hasil + j;
    }
    console.log(hasil);
    
}

