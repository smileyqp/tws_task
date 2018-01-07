function judge(score){
    var result;
    if(score.split(',').length!==8){
        result=false;
    }
    else
        result = true;
    return result;
}
module.exports = judge;
