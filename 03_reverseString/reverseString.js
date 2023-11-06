const reverseString = function(word) {
if(word ===''){
  return ""
}else{
return word.split("").reverse().join("")


}

};

reverseString("hello world")

// Do not edit below this line
module.exports = reverseString;
