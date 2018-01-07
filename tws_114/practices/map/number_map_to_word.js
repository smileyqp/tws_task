'use strict';
var number_map_to_word = function(collection){
  var result=[];
    var zimu="";
    collection.map(function(item,index,array){
     if(item<=26){
         result.push(String.fromCharCode(item+96));
     }
     else if(item>26&&item%26!=0){
         zimu=String.fromCharCode(item/26+96)+String.fromCharCode(item%26+96);
         result.push(zimu);
        }
     else if(item>26&&item%26==0){
          zimu=String.fromCharCode((item-26)/26+96)+String.fromCharCode(26+96);
          result.push(zimu);
        }
  });
  return result;
};

module.exports = number_map_to_word;
