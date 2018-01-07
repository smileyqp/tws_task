'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr=collection.toString().split(",");
  var result=[];
  for(let item of arr){
      result.push(parseInt(item));
  }
  return result;
}

module.exports = double_to_one;
