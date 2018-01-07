'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for(let itemB of collection_b){
          if(collection_a.indexOf(itemB)===-1){
              collection_a.push(itemB);
          }
      }
      return collection_a;
}

module.exports = get_union;

