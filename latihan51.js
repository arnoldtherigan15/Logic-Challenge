function animalsCounter (animals) {
    var result = {};
    for (var i = 0; i < animals.length; i++) {
        var animalsKey = animals[i].type;
        if (!result[animalsKey]) {
        result[animalsKey] = animals[i].age;
        }
        else if (result[animalsKey] > animals[i].age) {
            result[animalsKey] = animals[i].age;
        }
    }
    return result;
}
console.log(animalsCounter([{type: 'foxes', age:5}, {type: 'foxes', age:2}, {type: 'wolves', age:2}]))
// output = {
//  foxes: 1,
//  wolves: 2
// }