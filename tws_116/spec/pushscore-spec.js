let sinon = require("sinon");

let pushscore = require("../lib/pushscore");
let stuinfo = require("../lib/stuinfo");

describe('pushscore()',()=>{
    it('push a  new score',()=>{
    let score="朱静芬,1607250202,信管11602,汉,数学:80,语文:75,英语:85,编程:80";
    let answer=pushscore(score);
    let info=new stuinfo('朱静芬','1607250202','信管11602','汉','80','75','85','80');
    expect(answer.introduce()).to.equal(info.introduce());
});
})