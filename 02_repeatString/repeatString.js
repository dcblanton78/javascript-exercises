function repeatString(word, times) {
    if (times < 0  )
        return "ERROR"
    let long_word = "";
    for (i = 0; i < times; i++){
        long_word = long_word + word;
        //console.log(long_word);
    }
    return long_word;
}

// Do not edit below this line
module.exports = repeatString;
