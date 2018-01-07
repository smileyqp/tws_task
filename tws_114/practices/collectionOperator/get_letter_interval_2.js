'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var zimu="";
  if(number_a<number_b){
      for(let num=number_a;num<=number_b;num++){
              if(num<=26){
                  zimu= String.fromCharCode(num+96);
                  result.push(zimu);
              }
              else if(num>26&&num%26!=0){
                  zimu=String.fromCharCode(num/26+96)+String.fromCharCode(num%26+96);
                  result.push(zimu);
              }
              else if(num>26&&num%26==0){
                  zimu=String.fromCharCode((num-26)/26+96)+String.fromCharCode(26+96);
                  result.push(zimu);
              }
          }
  }
  else if(number_a>number_b){
      for(let num=number_a;num>=number_b;num--){
              if(num<=26){
                  zimu= String.fromCharCode(num+96);
                  result.push(zimu);
              }
              else if(num>26&&num%26!=0){
                  zimu=String.fromCharCode(num/26+96)+String.fromCharCode(num%26+96);
                  result.push(zimu);
              }
              else if(num>26&&num%26==0){
                  zimu=String.fromCharCode((num-26)/26+96)+String.fromCharCode(26+96);
                  result.push(zimu);
          }
  }
  }
  else if(number_a===number_b){
      if(number_a<=26){
            zimu= String.fromCharCode(number_a+96);
            result.push(zimu);
        }
      else if(number_a>26&&number_a%26!=0){
            zimu=String.fromCharCode(number_a/26+96)+String.fromCharCode(number_a%26+96);
            result.push(zimu);
        }
      else if(number_a>26&&number_a%26==0){
            zimu=String.fromCharCode((number_a-26)/26+96)+String.fromCharCode(26+96);
            result.push(zimu);
      }
  }
  return result;
}

module.exports = get_letter_interval_2;

