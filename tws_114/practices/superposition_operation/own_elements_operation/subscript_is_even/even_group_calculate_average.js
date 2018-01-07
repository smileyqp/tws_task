'use strict';
var even_group_calculate_average = function(collection){
var res=[];
    var arr1=[];
    var arr2=[];
    var arr3=[];
    for(let i in collection){
        if(i%2!=0){
            if(collection[i]%2===0){
             if(collection[i]<10){
                 arr1.push(collection[i]);
             }
             else if(collection[i]>=10&&collection[i]<100){
                 arr2.push(collection[i]);
             }
             else if(collection[i]>=100&&collection[i]<1000){
                 arr3.push(collection[i]);
             }
            }
        }
    }
    if(arr1.length!=0) {
    var sum1=arr1.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  var avg1=sum1/arr1.length;
  res.push(avg1);
  }
  if(arr2.length!=0) {
  var sum2=arr2.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  var avg2=sum2/arr2.length;
  res.push(avg2);
  }
  if(arr3.length!=0) {
  var sum3=arr3.reduce(function(preValue, curValue){
      return preValue+curValue;
  });
  var avg3=sum3/arr3.length;
  res.push(avg3);
  }
  if(res.length===0){
      res=[0];
  }
  return res;
};
module.exports = even_group_calculate_average;
