class stuinfo{
    constructor(name,sno,classname,nation,mathScore,chineseScore,englishScore,programScore) {
        this.name = name;
        this.sno = sno;
        this.classname = classname;
        this.nation=nation;
        this.mathScore = mathScore;
        this.chineseScore = chineseScore;
        this.englishScore = englishScore;
        this.programScore = programScore;
    }

    introduce(){
        return `${this.name},${this.sno},${this.classname},${this.mathScore},${this.chineseScore},${this.englishScore},${this.programScore}`;
    }
}
module.exports =stuinfo;