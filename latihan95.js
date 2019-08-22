// INPUT 'Hellow world!'
// OUTPUT !dlrow olleH

function balikKata (str){
    // console.log(str.slice(0,-1));
    if (str.length === 1) {
        return str[str.length-1];
    } else {
        return str[str.length-1] + balikKata(str.slice(0,-1));
    }
}
console.log(balikKata('hello world'));
