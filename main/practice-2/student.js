const Person = require('./person');

function Student(name, age, klass) {
    Person.call(this, name, age);
    this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.superIntroduce = Student.prototype.introduce;

Student.prototype.introduce = function() {
    let res;
    res = `${this.superIntroduce()} I am a Student.`;
    if (this.klass.leader && this.name === this.klass.leader.name) {
        res += ` I am Leader of Class ${this.klass.number}.`;
    } else {
        res += ` I am at Class ${this.klass.number}.`;
    }
    return res;
}

module.exports = Student;