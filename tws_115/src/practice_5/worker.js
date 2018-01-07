import Person from "./person.js";
class Worker extends Person {
    constructor(name, age) {
        super(name, age);
    }
    introduce() {
        let personStr = super.introduce();
        return `${personStr} I am a Teacher. I have a job.`;
    }
}
exports["default"] = Worker;
module.exports = exports["default"];