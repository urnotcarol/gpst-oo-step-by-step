const Person = require('./person');

function Student(name, age, clazz) {
    Person.call(this, name, age);
    this.clazz = clazz;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.superIntroduce = Student.prototype.introduce;

Student.prototype.introduce = function() {
    let res;
    res = `${this.superIntroduce()} I am a Student.`;
    if (!this.clazz.hasStudent(this)) {
        res += " I haven't been allowed to join Class.";
    } 
    else if (this.clazz.hasStudent(this)
    && ((this.clazz.leader && this.id !== this.clazz.leader.id) 
    || !this.clazz.leader)) {
        res += ` I am at Class ${this.clazz.number}.`;
    }
    else if (this.clazz.leader && this.id === this.clazz.leader.id) {
        res += ` I am Leader of Class ${this.clazz.number}.`;
    }

    return res;
}

module.exports = Student;