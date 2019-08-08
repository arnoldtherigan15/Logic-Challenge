function primeNumbers(start, finish) {
    var arrPrime = []
    for (var i = 0; arrPrime.length<=finish; i++) {
        var number = i
        var count = 0
        for (j=0; j<=number; j++) {
            if(number%j === 0) {
                count = count + 1
            }
             
        }
        if (count === 2) {
            arrPrime.push(number)
        }
    }
    // console.log(arrPrime)
 return arrPrime.slice(start-1)
 }
 console.log(primeNumbers(4, 11))