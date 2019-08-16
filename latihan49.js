function animalsCounter (animals) {
var result = {};
 
for (var i = 0; i < animals.length; i++) {
    var currentAnimals = animals[i];
    if(!result[currentAnimals]) {
        result[currentAnimals] = 0;
    }
    if (animals[i] === currentAnimals) {
        result[currentAnimals] += 1;
    }
}
return result;
}
console.log(animalsCounter(['foxes','wolves','foxes','foxes']));
// {
//     foxes: 3,
//     wolves: 1
// }