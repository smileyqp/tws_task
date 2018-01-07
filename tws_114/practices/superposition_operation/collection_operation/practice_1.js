'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result=[];
  for(let item of collection){
      result.push(item*3+2);
  }
  var sum=result.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  return sum;
}

module.exports = hybrid_operation;

