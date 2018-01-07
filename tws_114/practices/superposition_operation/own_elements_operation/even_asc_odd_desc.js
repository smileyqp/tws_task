'use strict';
var even_asc_odd_desc = function(collection){
var even_asc_odd_desc = function(collection){
    var arr1=[];
var arr2=[];
for(var i in collection){
    if(collection[i]%2===0){
        arr1.push(collection[i]);
    }
    else{
        arr2.push(collection[i]);
    }
}
var temp=0;
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr1.length-1-i;j++){
        if(arr1[j]>arr1[j+1]){
            temp=arr1[j];
            arr1[j]=arr1[j+1];
            arr1[j+1]=temp;
        }
    }
}
for(var i=0;i<arr2.length;i++){
    for(var j=0;j<arr2.length-1-i;j++){
        if(arr2[j]<arr2[j+1]){
            temp=arr2[j];
            arr2[j]=arr2[j+1];
            arr2[j+1]=temp;
        }
    }
}
for(var i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
}
    return arr1;
};
module.exports = even_asc_odd_desc;
