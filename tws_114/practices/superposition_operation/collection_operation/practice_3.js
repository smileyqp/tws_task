'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result=[];
  for(let item of collection){
      if(item%2!=0){
          result.push(item*3+5);
      }
  }
  var sum=result.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  return sum;
}

module.exports = hybrid_operation_to_uneven;

