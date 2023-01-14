const sumAll = function(a,b) {
    if (typeof a === 'string' || typeof b === 'string' || typeof a === 'object' || typeof b === 'object')
    {
        return "ERROR";
    }
    if ( a < 0 || b < 0 )
    {
        return "ERROR";
    }
    let sum = 0;
    let m = Math.max(a , b);
    let n = Math.min(a , b);
    for (let i = n; i <= m; i++)
    {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
