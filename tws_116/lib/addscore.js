var readlineSync = require('readline-sync');
var judge = require('./judge');
var pushscore= require('./pushscore');
var main=require('./main');
function addscore(list){
    var score=readlineSync.question(`请输入学生信息（格式：姓名,学号,班级,学科:成绩,...），按回车提交：`);
    if(judge(score)===false){
        score= readlineSync.question(`请按正确的格式输入（格式：姓名,学号,班级,学科:成绩,...):
`);
    }
    else{
        list.push(pushscore(score));
        console.log(`学生${score.split(",")[0]}的成绩被添加`);
        return list;
    }
}
module.exports = addscore;
