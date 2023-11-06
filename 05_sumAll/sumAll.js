const sumAll = function(start , end ) {
if(start < 0 || end < 0){

  return 'ERROR'
}else if (typeof(start) !== typeof(end)){
  return "ERROR"
}

  if(start > end){
    bac = end 

    end = start 

    start = bac
  }

  total = 0 
for(let i = start ; i <= end ; i++){

  total += i 

}
return total 

};

// Do not edit below this line
module.exports = sumAll;
