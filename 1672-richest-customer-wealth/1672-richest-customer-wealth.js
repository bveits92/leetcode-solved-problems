/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let results = [];

    for (let i = 0; i < accounts.length; i++) {
        let sums = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sums += accounts[i][j];
        }
        results.push(sums); 
    }

    let maxWealth = Math.max(...results);

    return maxWealth;
};