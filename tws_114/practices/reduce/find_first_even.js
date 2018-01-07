'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var arr=[];
var result=collection.reduce(function(preValue,curValue,index){
    if(preValue%2===0){
        arr.push(0);
    }
    else if(curValue%2===0){
        arr.push(curValue);
    }
})
return arr[0];
}

module.exports = find_first_even;

