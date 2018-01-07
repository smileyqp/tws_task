'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  for(let itemB of collection_b){
      for(let itemA of collection_a){
          if(itemA===itemB){
              result.push(itemB);
          }
      }
  }
  return result;
}

module.exports = get_intersection;
