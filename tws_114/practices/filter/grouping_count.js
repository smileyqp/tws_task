'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result={};
  collection.forEach(ele => {
      if(result[ele.toString()]){
          ++result[ele.toString()];
      }
      else{
          result[ele.toString()]=1;
      }
  });
  return result;
}

module.exports = grouping_count;
