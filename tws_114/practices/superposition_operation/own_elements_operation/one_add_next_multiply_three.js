'use strict';
function one_add_next_multiply_three(collection){
  var res=[];
    for(let i=0;i<collection.length-1;i++){
        var num=(collection[i]+collection[i+1])*3;
        res.push(num)
    }
    return res;
}
module.exports = one_add_next_multiply_three;
