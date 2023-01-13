const reverseString = function(text) {
    let answer = "";
    for (let i=text.length-1; i>=0; i--)
    {
        answer+=text[i]
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
