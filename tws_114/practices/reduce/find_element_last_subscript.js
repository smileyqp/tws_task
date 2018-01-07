'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var arr=[];
  var result=collection.reduce(function(preValue,curValue,index){
      if(preValue===element){
          arr.push(0);
      }
      else if(curValue===element){
          arr.push(index);
      }
  })
  return arr[arr.length-1];
}

module.exports = calculate_elements_sum;
