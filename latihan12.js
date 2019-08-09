function targetTerdekat(arr) {
    var penampungO = 0;     //Just initial value, the value will change as long as the program run
    var penampungJarak = 0;     //Just initial value, the value will change as long as the program run
    var indexX = [];    //To store all of x's index
    var indexJarak = [];     //To store all of distance between x and o

  if (arr.indexOf('x') === -1) {     //If x can't be found, display will be 0
            return 0;
  } else {
    for (var i=0; i<arr.length; i++) {  //Check the condition from arr index 0 until arr index length's array-1
        if (arr[i] === 'x') {           //if found x at index i, then add index of x in variabel indexX from the right
            indexX.push(i);
        } else if (arr[i] === 'o') {    //if found o at index i, then save index of o in penampungO
            penampungO = i;
        }
        indexJarak = [];                //Variabel indexJarak should be reassigment before the next looping. 
        for (var j=0; j<indexX.length; j++) {   //Check the condition from indexX index 0 until indexX index length'array-1 (when index length array equal to 0, looping won't run)
            penampungJarak = Math.abs(indexX[j] - penampungO);  //Calculate the distance between index of o and index of x for every index of x in indexX array
            indexJarak.push(penampungJarak);    //Store all of calculation result in indexJarak array
            }
        }
    indexJarak.sort();  //Sort the element of indexJarak, automaticaly from small to big (increase)
    return indexJarak[0];   //Return the value of function to the smallest element of indexJarak
    }

}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2