import Person from "./person.js";
import klass from "./class.js";
class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        let res = super.introduce();
        if (typeof(this.klass) === 'undefined')
            res += ` I am a Teacher. I teach No Class.`;
        else
            res += ` I am a Teacher. I teach Class ${this.klass.number}.`;
        return res;
    }
    introduceWith(student) {
        let res = super.introduce() + ` I am a Teacher. `;
        if (student.klass.number === this.klass.number)
            res += `I teach ${student.name}.`;
        else
            res += `I don't teach ${student.name}.`;
        return res;
    }
}
exports["default"] = Teacher;
module.exports = exports["default"];