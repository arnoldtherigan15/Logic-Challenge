function balikString(kata = []) {
    var kataBaru = [];
    kata = kata[0].split('');
    for (var i = kata.length - 1; i >= 0; i--) {
        // kataBaru = kataBaru + kata[i];
        kataBaru.push(kata[i]);
    } console.log(kata);
    return kataBaru;
}
console.log(balikString(['hello']));

// var kata = ['hello'];
// var baru = kata[0].split('');
// console.log(baru);

