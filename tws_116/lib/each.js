var sum;
function each(list,sno){
    var res="";
    var avg=0;
    list.forEach(item=>{
        if(item.sno === sno){
        sum=parseFloat(item.math)+parseFloat(item.chinese)+parseFloat(item.english)+parseFloat(item.program);
        avg = sum/4;
        res=`
${item.name}|${item.math}|${item.chinese}|${item.english}|${item.program}|${avg}|${sum}`;
    }
});
    return res;
    console.log(scorelist);
}
function sum(){
    return sum;
}
module.exports = {each,sum};