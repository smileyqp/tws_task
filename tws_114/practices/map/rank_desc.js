'use strict';
var rank_desc = function(collection){
  var temp=0;
  for(let i=0;i<collection.length;i++){
      for(let j=0;j<collection.length-1-i;j++){
          if(collection[j]>collection[j+1]){
              temp=collection[j];
              collection[j]=collection[j+1];
              collection[j+1]=temp;
          }
      }
  }
  return collection;
};

module.exports = rank_desc;
