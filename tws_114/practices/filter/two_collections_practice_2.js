'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  for(let itemA of collection_a){
      if(collection_b.indexOf(itemA)===-1){
          result.push(itemA);
      }
  }
  return result;
}

module.exports = choose_no_common_elements;
