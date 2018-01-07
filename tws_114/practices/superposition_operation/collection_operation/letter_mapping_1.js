'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result=[];
  var zimu="";
  for(let item of collection){
      if(item%2===0){
          zimu= String.fromCharCode(item+96);
          result.push(zimu);
      }
  }
  return result;
}

module.exports = even_to_letter;
