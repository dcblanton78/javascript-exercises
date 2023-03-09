function reverseString(str) {
    let splitString = str.split("") 
    console.log(splitString);
    let reverseArray = splitString.reverse();
    console.log("Reverse Array: " + reverseArray);
    let reversedString = reverseArray.join("");
    console.log("Reversed String: " + reversedString);
    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
