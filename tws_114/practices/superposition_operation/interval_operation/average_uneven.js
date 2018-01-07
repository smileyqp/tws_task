'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var res=[];
  for(let item of collection){
      if(item%2!=0){
          res.push(item);
      }
  }
  var sum=res.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  var avg=sum/res.length;
  return avg;
}

module.exports = average_uneven;
