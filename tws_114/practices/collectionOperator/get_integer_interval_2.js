'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
    if(number_a==number_b)
  {
    if(number_a%2==0)
      result.push(number_a);
  }
  else if(number_a>number_b)
  {
    for(let item=number_a;item>=number_b;item--)
      if(item%2==0)
        result.push(item);
  }
  else
  {
    for(let item=number_a;item<=number_b;item++)
      if(item%2==0)
        result.push(item);
  }
    return result;
}

module.exports = get_integer_interval_2;
