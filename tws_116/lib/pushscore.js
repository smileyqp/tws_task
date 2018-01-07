var stuinfo = require('./stuinfo');
function pushscore(score){
    var info=score.split(",");
    var name,sno,classname,nation,math,chinese,english,program;
    name=info[0];
    sno=info[1];
    classname=info[2];
    nation=info[3];
    for(let i=4;i<8;i++){
        let infomation=info[i].split(":");
        if(infomation[0] === "数学")
            math = infomation[1];
        else if(infomation[0] === "语文")
            chinese = infomation[1];
        else if(infomation[0] === "英语")
            english = infomation[1];
        else if(infomation[0] === "编程")
            program = infomation[1];
    }
    var newscore = new stuinfo(name,classname,nation,math,chinese,english,program);
    return newscore;
}
module.exports = pushscore;