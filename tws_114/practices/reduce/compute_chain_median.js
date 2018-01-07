'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var result=0;
  var arr=collection.split("->");
  var arrs=[];
  for(let item of arr){
      arrs.push(parseInt(item));
  }
  var temp=0;
  for(let i=0;i<arrs.length;i++){
      for(let j=0;j<arrs.length-1-i;j++){
          if(arrs[j]<arrs[j+1]){
              temp=arrs[j];
              arrs[j]=arrs[j+1];
              arrs[j+1]=temp;
          }
      }
  }
  if(arrs.length%2===0){
      var len=arrs.length/2;
    result=(arrs[len-1]+arrs[len])/2;
  }
  else{
      var len=(arrs.length+1)/2;
      result=arrs[len];
  }
  return result;
}

module.exports = compute_chain_median;
