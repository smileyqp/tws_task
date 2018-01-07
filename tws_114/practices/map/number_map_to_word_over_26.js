'use strict';
var number_map_to_word_over_26 = function(collection){
  var result=[];
    var res=collection.map(function(item,index,array){
        result.push(String.fromCharCode(item+96));
    });
    return result;
};

module.exports = number_map_to_word_over_26;
