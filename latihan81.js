// =================
// AGE VERIFICATION
// =================
// [INSTRUCTION]
// Terdapat function ageVerification , function akan mengembalikan list
// orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
// - jika gender male diberikan imbuhan Mr.
// - jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
// - jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.
// [EXAMPLE]
// input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
// output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']
// [RULES]
// - dilarang menggunakan REGEX
// - dilarang menggunakan substring, substr, slice, splice

function ageVerification(arr) {
    var result = [];
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        temp.push(arr[i].split(','))
    }
    for (var i = 0; i < temp.length; i++) {
        if (temp[i][1] === 'male' && temp[i][2] > 19) {
            result.push('Mr. ' + temp[i][0]);
        } else if (temp[i][1] === 'female' && temp[i][2] > 19 && temp[i][2] > 30) {
            result.push('Mrs. ' + temp[i][0]);
        } else if (temp[i][1] === 'female' && temp[i][2] > 19 && temp[i][2] < 30) {
            result.push('Ms. ' + temp[i][0]);
        }
    }
    return result;
}
console.log(ageVerification(['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']));