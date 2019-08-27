/*
=========
HACKATHON
=========
[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.
[EXAMPLE]
"bank account sudah disediakan"
input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]
[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary (tradeActivity) {
    var bankAccount = [
      { name: 'Jeff Bezos', deposit: 100000, owner: 'Amazon' },
      { name: 'Jack Ma', deposit: 90000, owner: 'Alibaba' },
      { name: 'Larry Page', deposit: 95000, owner: 'Google' }
    ];
    var newArr = [];
    for (var i = 0; i < tradeActivity.length; i++) {
        newArr.push([]);
        for (var j = 0; j < tradeActivity[i].length; j++) {
            var temp = '';
            newArr[i].push([]);
            for (var k = 0; k < tradeActivity[i][j].length; k++) {
               
                if (tradeActivity[i][j][k] === '+' || tradeActivity[i][j][k] === '%' || tradeActivity[i][j][k] === '-') {
                    newArr[i][j].push(temp);
                    temp = '';
                }
                else {
                    temp += tradeActivity[i][j][k];
                }
                if (tradeActivity[i][j][k] === '+') {
                    newArr[i][j].push('+');
                } else if (tradeActivity[i][j][k] === '-') {
                    newArr[i][j].push('-');
                }
            }
        }
    }
    // console.log(newArr);
    var result = [];
    for (var i = 0; i < newArr.length; i++) {
        for (var j = 0; j < newArr[i].length; j++) {
          
          for (var k = 0; k < bankAccount.length; k++) {
            if (bankAccount[k]['name'] === newArr[i][j][0]) {
              if(newArr[i][j][1] === '+') {
                bankAccount[k]['deposit'] += ((bankAccount[k]['deposit'])*Number(newArr[i][j][2]))/100;
                result.push({name: newArr[i][j][0], deposit: bankAccount[k]['deposit'], owner: bankAccount[k]['owner']})
                
              } else {
                bankAccount[k]['deposit'] -= ((bankAccount[k]['deposit'])*Number(newArr[i][j][2]))/100;
                result.push({name: newArr[i][j][0], deposit: bankAccount[k]['deposit'], owner: bankAccount[k]['owner']})
              }
              
            }
          }
          
          
        }
    }
    return result;
    
    
}
console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]))
/*
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/

// console.log(economyChangeSummary([
//   ['Jeff Bezos-10%']
// ]))
/*
      [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
    */