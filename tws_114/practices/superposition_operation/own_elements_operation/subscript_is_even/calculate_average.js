'use strict';
var calculate_average = function(collection){
var res=[];
    for(let i in collection){
        if(i%2!=0){
            res.push(collection[i]);
        }
    }
    var sum=res.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  var avg=sum/res.length;
  return avg;
};
module.exports = calculate_average;
