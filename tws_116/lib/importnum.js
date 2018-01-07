var addscore= require('./addscore');
var printscore= require('./printscore');
function importnum(num,list){
    if(num==='1'){
        list=addscore(list);
    }
    else if(num==='2' ){
        printscore(list);
    }
    else if(num==='3'){
        return;
    }
    else{
        console.log("请选择正确选项");
    }
}
module.exports = importnum;
