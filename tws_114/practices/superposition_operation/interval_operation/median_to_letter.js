'use strict';

function median_to_letter(collection) {

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
  var num=Math.ceil(result);
  var zimu="";
  if(num<=26){
            zimu= String.fromCharCode(num+96);
        }
  else if(num>26&&num%26!=0){
            zimu=String.fromCharCode(num/26+96)+String.fromCharCode(num%26+96);
        }
  else if(num>26&&num%26==0){
            zimu=String.fromCharCode((num-26)/26+96)+String.fromCharCode(26+96);
        }
    return zimu;
}

module.exports = median_to_letter;
