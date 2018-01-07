import Person from "./person.js";
import klass from "./class.js";
class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        let personStr = super.basic_introduce();
        return `${personStr} I am a Student. I am at Class ${this.klass.number}.`;
    }
}
exports["default"] = Student;
module.exports = exports["default"];