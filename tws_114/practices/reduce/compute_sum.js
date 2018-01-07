'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var sum=collection.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  return sum;
}

module.exports = calculate_elements_sum;

