function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    var result = [];
    

    for (var i = 0; i < listBarang.length; i++) {
        var name = [];
        var totalProfit = 0;
        var object = {};
        // var name2 = []
       
        var currentAmount = listBarang[i][2];
        var singlePrice = listBarang[i][1];
        object.product = listBarang[i][0];
        var profit = 0;

        for (var j = 0; j < shoppers.length; j++) {
            if (listBarang[i][0] === shoppers[j].product && currentAmount >= shoppers[j].amount) {
                object.shoppers = name;
                object.shoppers.push(shoppers[j].name);
                currentAmount -= shoppers[j].amount;
                profit = (listBarang[i][2]-currentAmount)*singlePrice;
                // object.totalProfit = (listBarang[i][2]-currentAmount)*singlePrice;
                // result.push(object);
            }
            else{
                object.shoppers = name;
                // object.totalProfit = 0;
            }
            object.leftOver = currentAmount;
            object.totalProfit = profit;
        //    else {
        //         // object.product = shoppers[j].product;
        //         // object.shoppers = ;
        //         object.leftOver = listBarang[i][2];
        //         object.totalProfit = totalProfit;
            
        //    }
            
        }
        result.push(object);
        
   
       
    }
    

    return result;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
// console.log(countProfit([])); //[]