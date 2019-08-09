function groupAnimals(animals) {
    animals.sort();
    var result = [];
    for (var i = 0; i < animals.length; i++) {
        if (result.length === 0) {
            result.push([animals[i]]);
        } else if (result[result.length-1][0][0] === animals[i][0]) {
            result[result.length-1].push(animals[i]);
        } else {
            result.push([]);
            result[result.length-1].push(animals[i]);
        }
    }
    return result;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]