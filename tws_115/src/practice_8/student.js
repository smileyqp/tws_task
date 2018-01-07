import Person from "./person.js";
class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }
    introduce() {
        let res = super.introduce();
        if (typeof(this.klass.leader) === "undefined")
            res = `${res} I am a Student. I am at Class ${this.klass.number}.`;
        else
            res = `${res} I am a Student. I am Leader of Class ${this.klass.number}.`;;
        return res;
    }
}
exports["default"] = Student;
module.exports = exports["default"];