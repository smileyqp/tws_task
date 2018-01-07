'use strict';
var single_element = function(collection){
var single_element = function(collection){
    var arr1=[];
    var arr2=[];
    var res=[];
    var flag=0;
    for(let i in collection){
        if(i%2!=0){
            arr1.push(collection[i]);
        }
    }
    for(let i in arr1){
        flag=0;
        for(let j in arr2){
            if(arr2[j].key===arr1[i]){
            arr2[j].count++;
            flag=1;
        }
        }
        if(flag===0){
            arr2.push({key:arr1[i],count:1});
        }
    }
    for(var i in arr2){
        if(arr2[i].count===1){
            res.push(arr2[i].key);
        }
    }
    return res;
};
module.exports = single_element;
