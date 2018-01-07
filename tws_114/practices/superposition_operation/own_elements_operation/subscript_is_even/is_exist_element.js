'use strict';
var is_exist_element = function(collection,element){
var res=[];
    for(let i in collection){
        if(i%2===0){
            res.push(collection[i]);
        }
    }
    if(res.indexOf(element)!=-1){
        return true;
    }
    else{
        return false;
    }
};
module.exports = is_exist_element;
