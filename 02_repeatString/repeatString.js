const repeatString = function(name, num) {
    text = "";
    for (let i=0; i<num; i++)
    {
        text += name;
    }
    if (num < 0)
    {
        return "ERROR";
    }
    else{return text;}
    
};

// Do not edit below this line
module.exports = repeatString;
