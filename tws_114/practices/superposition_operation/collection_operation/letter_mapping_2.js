'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum=collection.reduce(function(preValue,curValue){
      return preValue + curValue; 
      });
  var avg=sum/collection.length;
  var num=Math.ceil(avg);
  return String.fromCharCode(num+96);
}

module.exports = average_to_letter;

