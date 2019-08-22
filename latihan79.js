// function hitungJumlahKata(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         var isFind = false;
//         if (str[i] === ' ') {
//             isFind = true;
//             if (i === 0 || str[i + 1] === ' ') {
//                 isFind = false;
//             }

//         }
//         if (i === str.length - 1) {
//             if (str[i] === ' ') {
//                 isFind = false;
//             }
//             count++;
//         }
//         if (isFind === true) {
//             count++;

//         }

//     }
//     return count;
// }
  
// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5
// console.log(hitungJumlahKata(' I have a dream a   song to    sing     ')); // 8

function changeVocals (str) {
    var vokal = ['a','i','u','e','o','A','I','U','E','O'];
    var konsonan = ['b','j','v','f','p','B','J','V','F','P'];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vokal.length; j++) {
            if (str[i] === vokal[j]) {
                str[i] = konsonan[j];
            } 
        }
    }
    return str;
}

function reverseWord (str) {
    var reverse = [];
    for (var i = str.length-1; i >= 0; i--) {
        reverse.push(str[i]);
    }
    return reverse;
}

function setLowerUpperCase (str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
          result.push(str[i].toUpperCase());
      } else {
        result.push(str[i].toLowerCase());
      }
  }
  return result;
}

function removeSpaces (str) {
  for (var i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
          str[i] = '';
      }
  }
  return str;
}

function passwordGenerator (name) {
    name = name.split('');
    if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  var name = changeVocals(name);
  name = reverseWord(name);
  name = setLowerUpperCase(name);
  name = removeSpaces(name);
  return name.join('');
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'