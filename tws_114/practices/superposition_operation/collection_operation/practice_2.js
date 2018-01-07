'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result=[];
  for(let item of collection){
      if(item%2!=0){
          result.push(item*3+2);
      }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

