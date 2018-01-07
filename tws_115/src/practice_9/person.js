class Person {
    constructor(id, name, age) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
    basic_introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
exports["default"] = Person;
module.exports = exports["default"];