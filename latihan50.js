function animalsCounter(animals) {
    var result = {};
    for (var i = 0; i < animals.length; i++) {
        var currentAnimals = animals[i][0];
        if (!result[currentAnimals]) {
            result[currentAnimals] = animals[i][1];
        } else if (result[currentAnimals] > animals[i][1]) {
            result[currentAnimals] = animals[i][1];
        }
    }
    return result;
}

console.log(animalsCounter([['foxes',4],['wolves',3],['foxes',3],['wolves',5]]));
// {
//     foxes: 4,
//     wolves: 1
// }