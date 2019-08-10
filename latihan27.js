var num = [5, 2, 1, 4];
var tampung = 0;
for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num.length; j++) {
        if (num[j] < num[j+1]) {
            tampung = num[j];
            num[j] = num[j+1];
            num[j+1] = tampung;
        }
    }
    
}
console.log(num);

