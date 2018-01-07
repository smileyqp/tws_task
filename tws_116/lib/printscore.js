var readlineSync = require('readline-sync');
var judgesno = require('./judgesno');
var each = require('./each');
function printscore(list){
    var all=[];
    var info = readlineSync.question(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
`);
    var scorelist=`成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================`;
    var str="";
    if(judgesno(info)===true){
        var message=info.split(",");
        message.forEach(item=>{
            str=each.each(list,item);
        scorelist+=str;
        all.push(each.sum());
    })
    }
    else {
        info = readlineSync.question(`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
`);
    }
    var allsum=all.reduce(function(preValue, curValue){
        return preValue+curValue;
    });
    var allavg=allsum/all.length;
    var middle=0;
    var i=all.length /2;
    if(all.length%2==0)
        middle = (all[i]+all[i-1])/2;
    else
        middle = all[(all.length-1)/2];
    scorelist+=`========================
全班总分平均数：${allavg.toFixed(2)}
全班总分中位数：${middle}`;
}

module.exports = printscore;
