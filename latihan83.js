// 2)
// TIDAK BOLEH MENGGUNAKAN SPLIT DAN JOIN
// input: 'iphone,samsung,xiaomi,samsung,samsung,xiaomi'
//

//

function duplikatFind(str) {
    var splitBrand = [];
    var temp = '';
    for (var i = 0; i < str.length; i++) {
        var isComma = false;
        if (str[i] === ',') {
            isComma = true;
        }
        if (isComma === true) {
            splitBrand.push(temp);
            temp = '';
        }
        if (isComma === false) {
            temp += str[i];
        }
        if (i === str.length-1) {
            splitBrand.push(temp);
        }
    }
    var brand = [];
    var count = [];
    for(var i = 0; i < splitBrand.length; i++) {
        var isFind = false;
        if(brand.length === 0) {
            brand.push(splitBrand[i]);
            count.push(0);
        }
        for (var j = 0; j < brand.length; j++) {
            if(brand[j] === splitBrand[i]) {
                count[j]++ ;
                isFind = true;
            } 
        }
        if (isFind === false) {
            brand.push(splitBrand[i]);
            count.push(1);
        }

    }
    console.log(brand);
    console.log(count);
    
    return brand[1] + '(' + count[1] +') ' + brand[2] + '(' + count[2] +') ' + brand[0] + '(' + count[0] +')';
}
console.log(duplikatFind('iphone,samsung,xiaomi,samsung,samsung,xiaomi'));
// output: 'samsung(3), xiaomi(2), iphone(1)'