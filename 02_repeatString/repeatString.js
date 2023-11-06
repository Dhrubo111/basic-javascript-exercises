const repeatString = function(word , num) {
if(num === 0 || word === ''){
  return ""
}else if(num < 0 ){

  return "ERROR"
}else{
  say = ''
  for(let i= 0 ; i < num ; i++){

    say +=word
  }
  return say
}


};

// Do not edit below this line
module.exports = repeatString;
