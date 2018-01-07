import Person from "./person.js"
class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }
    introduce() {
        let res = super.introduce();

        if (typeof this.klass === 'undefined')
            res += ` I am a Teacher. I teach No Class.`;
        else
            res += ` I am a Teacher. I teach Class ${this.klass.number}.`;

        return res;
    }
}
exports["default"] = Teacher;
module.exports = exports["default"];