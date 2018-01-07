class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }
    registerAssignLeaderListener(teacher, student) {
        if (student.klass.number === this.number) {
            this.leader = student;
            if (typeof(teacher) !== 'undefined')
                console.log(`I am ${teacher.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
        }
    }

    assignLeader(student, teacher) {
        if (student.klass.number === this.number) {
            this.leader = student;
        } else
            console.log("It is not one of us.");
    }
    registerJoinListener(teacher, student) {
        student.klass = this;
        if (typeof(teacher) !== 'undefined')
            console.log(`I am ${teacher.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
    }

    appendMember(student, teacher) {
        student.klass = this;
    }
    isIn(student) {
        if (student.klass.number === this.number)
            return true;
        else
            return false;
    }
}
exports["default"] = Class;
module.exports = exports["default"];