'use strict';

function compute_median(collection) {
  //在这里写入代码
  var result=0;
  var temp=0;
  for(let i=0;i<collection.length;i++){
      for(let j=0;j<collection.length-1-i;j++){
          if(collection[j]<collection[j+1]){
              temp=collection[j];
              collection[j]=collection[j+1];
              collection[j+1]=temp;
          }
      }
  }
  if(collection.length%2===0){
      var len=collection.length/2;
    result=(collection[len-1]+collection[len])/2;
  }
  else{
      var len=(collection.length+1)/2;
      result=collection[len];
  }
  return result;
}

module.exports = compute_median;


