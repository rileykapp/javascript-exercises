const repeatString = function(string, times) {
    if(times < 0) return "ERROR";
    let repeats ='';
    while(times){
        repeats += string;
        times --;
    }
    return repeats
};

// Do not edit below this line
module.exports = repeatString;
