var importnum = require('./importnum');
var readlineSync = require('readline-sync');
function main(){
    var num = readlineSync.question(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    var list=[];
    importnum(num,list);
}
module.exports = main;