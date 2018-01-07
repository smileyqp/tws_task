'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
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
  if(collection.length%3===0){
      for(let i=0;i<collection.length;i++){
          if(i%3===0){
          temp=collection[i];
          collection[i]=collection[i+1];
          collection[i+1]=collection[i+2];
          collection[i+2]=temp;
      }
      }
  }
  else if(collection.length%3===1){
      for(let i=0;i<collection.length-1;i++){
          if(i%3===0){
          temp=collection[i];
          collection[i]=collection[i+1];
          collection[i+1]=collection[i+2];
          collection[i+2]=temp;
      }
      }
  }
  else if(collection.length%3===2){
      for(let i=0;i<collection.length-2;i++){
          if(i%3===0){
          temp=collection[i];
          collection[i]=collection[i+1];
          collection[i+1]=collection[i+2];
          collection[i+2]=temp;
      }
      }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
