'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var result=[];
  for(let item of collection){
      if(item%3===0){
          result.push(item);
      }
  }
  return result;
}

module.exports = choose_multiples_of_three;
