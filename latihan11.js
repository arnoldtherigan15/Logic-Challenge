function groupAnimals(animals) {
    animals.sort();
    var result = [[]];
    var indeksResult = 0;
    for (var i = 0; i < animals.length; i++) {
        if (result[0].length === 0) {
            result[0].push(animals[i]);
        } else if (result[indeksResult][0][0] === animals[i][0]) {
            result[indeksResult].push(animals[i]);
        } else {
            result.push([animals[i]]);
            indeksResult++;
        }
    }
    return result;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]