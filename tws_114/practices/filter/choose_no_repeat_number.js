'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=[];
  for(let item of collection){
      if(result.indexOf(item)===-1){
          result.push(item);
      }
  }
  return result;
}

module.exports = choose_no_repeat_number;
