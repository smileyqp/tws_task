'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var result=collection.reduce(function (preValue,curValue,index,array) {
      if(preValue<curValue){
          return preValue;
      }
      else{
          return curValue;
      }
});
return result;
}

module.exports = collect_min_number;

