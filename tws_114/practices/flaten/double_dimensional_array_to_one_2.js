'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr=collection.toString().split(",");
  var arrs=[];
  var result=[];
  for(let item of arr){
      if(arrs.indexOf(item)===-1){
          arrs.push(item);
      }
  }
  for(let item of arrs){
      result.push(parseInt(item));
  }
  return result;
}

module.exports = double_to_one;
