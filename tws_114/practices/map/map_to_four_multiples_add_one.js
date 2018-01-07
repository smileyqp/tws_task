'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result=[];
    var res=collection.map(function(item,index,array){
        result.push(item*4+1);
    });
    return result;
};

module.exports = map_to_four_multiples_add_one;
