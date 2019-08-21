// =====================
// Max Subset Sum
// =====================
// [INSTRUCTION]
// Diberikan sebuah function yang menerima parameter array bilangan bulat. Dimana
// function ini berfungsi untuk mengembalikan jumlah maksimum dari dua buah nilai
// yang dijumlahkan didalam array tersebut
// [EXAMPLE]
// - Bila array adalah [-2, 1, 3, -4, 5], maka nilai maksimum adalah 8 karena dua nilai yang
// dapat menghasilkan nilai maksimum adalah 3 + 5
// [RULE]
// 1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
// 2. dilarang menggunakan regex
// 3. dilarang menggunakan map, filter, reduce, apply

function maxSubset(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var nilaiAwal = arr[i];
        for (var j = 0; j < arr.length; j++) {
            var isFind = false;

            if(nilaiAwal < arr[j]) {
                isFind = true;
            }
        }
        if (isFind === true) {
            res.push(arr[i]);
        }
    }
    console.log(res);
}
// TEST CASE
console.log(maxSubset([-2, 1, 3, -4, 5])); // 8
// console.log(maxSubsetSum([-1, 2, 5, 7])); // 12
// console.log(maxSubsetSum([943,3893,43,33,394,384843,3849464,5725474,27,485947,474262]));// 9574938
