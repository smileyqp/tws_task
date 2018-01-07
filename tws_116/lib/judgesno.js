function judgesno(str){
    var result=true;
    if(str.indexOf(':')!=-1){
        result=false;
    }
    return result;
}
module.exports = judgesno;
