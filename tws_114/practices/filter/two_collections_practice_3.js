'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  for(let itemA of collection_a) {
    for(let itemB of collection_b){
        if(itemA%itemB===0){
            result.push(itemA);
        }
    }
}
return result;
}

module.exports = choose_divisible_integer;
