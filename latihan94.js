// INPUT 'I have a drealm'
// OUTPUT 4

function hitungKata (str) {
    if (str.length === 0) {
        return 0;
    }
    if (str.length === 1) {
        return 1;
    } else {
        if(str[0] === ' ') {
            return 1 + hitungKata(str.slice(1));
        } else {
            return hitungKata(str.slice(1));
        }
    }
    // console.log(str.slice(2));
    
}
// function hitungKata (str) {
//     if (str.length === 1) {
//         return 1;
//     } else {
//         if(str[0] === ' ') {
//             return 1 + hitungKata(str.slice(1));
//         } else {
//             return hitungKata(str.slice(1));
//         }
//     }
// }
console.log(hitungKata(''));