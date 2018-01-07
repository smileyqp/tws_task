'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum=collection.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  var result=sum/collection.length;
  return result;
}

module.exports = compute_average;

