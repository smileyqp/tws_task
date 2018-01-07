'use strict';
var map_to_three_multiples = function(collections){
  var result=[];
    var res=collections.map(function(item,index,array){
     result.push(item*3);
  });
  return result;
};

module.exports = map_to_three_multiples;
