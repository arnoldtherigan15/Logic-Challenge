function disariumNumber(n){
    var result = 0;
    var output;
    for (var i = 0; i < String(n).length; i++) {
        result = result + Number(String(n)[i])**(i+1);
    }
    if (n === result) {
        output = 'Disarium !!'
    } else {
        output = 'Not !!'
    }
    return output;
  }
  console.log(disariumNumber(135));