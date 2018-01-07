'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var zimu="";
  if(number_a<number_b){
      for(let num=number_a;num<=number_b;num++){
          zimu= String.fromCharCode(num+96);
          result.push(zimu);
      }
  }
  else if(number_a>number_b){
      for(let num=number_a;num>=number_b;num--){
          zimu= String.fromCharCode(num+96);
          result.push(zimu);
      }
  }
  else if(number_a===number_b){
      zimu= String.fromCharCode(number_a+96);
      result.push(zimu);
  }
  return result;
}

module.exports = get_letter_interval;
