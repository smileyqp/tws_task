'use strict';
var calculate_median = function(collection){
var res=[];
    var result=0;
    for(let i in collection){
        if(i%2!=0){
            res.push(collection[i]);
        }
    }
    if(res.length%2===0){
      var len=res.length/2;
    result=(res[len-1]+res[len])/2;
  }
  else{
      var len=(res.length-1)/2;
      result=res[len];
  }
  return result;
};
module.exports = calculate_median;
