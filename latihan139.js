function cariMean(arr,length) {
    if (arr.length === 0) {
        return 0
    } else {
        console.log(arr);
        if (arr.length === 1) {
            console.log('---');
            
            return (arr[0] + cariMean(arr.slice(1)))/length;
        }
        
        return arr[0] + cariMean(arr.slice(1));
    }

}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5],5)); // 3
// console.log(cariMean([3, 5, 7, 5, 3])); // 5
// console.log(cariMean([6, 5, 4, 7, 3])); // 5
// console.log(cariMean([1, 3, 3])); // 2
// console.log(cariMean([7, 7, 7, 7, 7])); // 7