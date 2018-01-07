module.exports = function main(num){
    let result;
    if(num>1&&num<99){
        result=String(num)+' bottles of beer on the wall,'+String(num)+' bottles of beer.\n'+
        'Take one down, pass it around,'+String(num-1)+' bottles of beer on the wall.\n'
    }
    else if(num===1){
        result='1 bottle of beer on the wall, 1 bottle of beer.\n'+
        'Take one down and pass it around, no more bottles of beer on the wall.\n'
    }
    else if(num<1){
        result='No more bottles of beer on the wall, no more bottles of beer.\n'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.\n'
    }
    return result;
}