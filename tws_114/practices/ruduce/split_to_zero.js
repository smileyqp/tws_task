'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=[];
  var num=number;
  if(number%interval === 0)
  {
    while (num> 0)
    {
      result.push(parseFloat(num.toFixed(1)));
      num-=interval;
    }
  }
  else
  {
    while (num> 0-interval)
    {
      result.push(parseFloat(num.toFixed(1)));
      num-=interval;
    }
  }
  return result;
}

module.exports = spilt_to_zero;
