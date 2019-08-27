function economyChangeSummary (tradeActivity) {
    var bankAccount = [
        { name: 'Jeff Bezos', deposit: 100000, owner: 'Amazon' },
        { name: 'Jack Ma', deposit: 90000, owner: 'Alibaba' },
        { name: 'Larry Page', deposit: 95000, owner: 'Google' }
      ]
    //split input
    var output = []
    for (var i=0; i<tradeActivity.length; i++) {
        var res = []
        for (var j=0; j<tradeActivity[i].length; j++) {
            var temp = '';
            for (var k=0; k<tradeActivity[i][j].length; k++) {
                if (tradeActivity[i][j][k] === '+' || tradeActivity[i][j][k] === '-' || tradeActivity[i][j][k] === '%') {
                    res.push(temp);
                    break;
                }
                temp += tradeActivity[i][j][k];
            }
            output.push(res);
            res = [];
        } 
        
        console.log(output); 
    } 
    
}
console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  // ['Larry Page+2%', 'Larry Page-1%'],
  // ['Jack Ma+4%'],
  // ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]))