'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var result;
var res_a=collection_a.reduce(function (preValue1, curValue1){
    var res_b=collection_a.reduce(function (preValue2, curValue2){
        if(preValue1===preValue2&&curValue1===curValue2){
            result=true;
        }
    })
});
return result;
}

module.exports = compare_collections;


