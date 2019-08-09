function groupAnimals(animals) {
    animals.sort();
    var kelompok = [];
    var indeksKelompok = 0;
    // console.log(animals);
    for (var i = 0; i < animals.length; i++) {
        if (kelompok.length === 0) {
            kelompok.push([animals[i]]) ;
        } else if (kelompok[indeksKelompok][0][0] === animals[i][0]) {
            kelompok[indeksKelompok].push(animals[i]);
        }
         else {
            indeksKelompok++;
            kelompok.push([animals[i]]);
        }
        
    }
    return kelompok;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]