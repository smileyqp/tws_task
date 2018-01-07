'use strict';
function map_to_even(collection){var result=[];
  var res=collection.map(function(item,index,array){
     result.push(item*2); 
  });
  return result;
}
module.exports = map_to_even;
