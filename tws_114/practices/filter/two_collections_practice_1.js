'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  for(let itemA of collection_a) {
      for(let itemB of collection_b){
          if(itemA===itemB){
              result.push(itemA);
          }
      }
  }
  return result;
}

module.exports = choose_common_elements;
