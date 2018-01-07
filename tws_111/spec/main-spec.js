var song = require("../main/main");
var res;

describe("beersong",function(){
    it("1<number<99",function(){
        let num=90;
        res=song(num);
        var answer ='90 bottles of beer on the wall,90 bottles of beer.\n'+
        'Take one down, pass it around,89 bottles of beer on the wall.\n'
           expect(res).toEqual(answer);
    });
    it("number===1",function(){
        let num=1;
        res=song(num);
        var answer ='1 bottle of beer on the wall, 1 bottle of beer.\n'+
      'Take one down and pass it around, no more bottles of beer on the wall.\n';
           expect(res).toEqual(answer);
    });
    it("number<1",function(){
        let num=0;
        res=song(num);
        var answer ='No more bottles of beer on the wall, no more bottles of beer.\n'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
           expect(res).toEqual(answer);
    });
});