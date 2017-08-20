const Person = require('./person');

function Teacher(name, age, clazzes) {
    Person.call(this, name, age);
    this.clazzes = clazzes;
    this.clazzes.forEach(clazz => {
        clazz.teachers.push(this);
    });
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.superIntroduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function() {
    let res = `${this.superIntroduce()} I am a Teacher. I teach `;
    if (this.clazzes.length === 0) {
        res += "No Class.";
    } else {
        res += "Class ";
        res += this.clazzes.map(klass => {
            return klass.number;
        }).join(",");
        res += ".";
    }
    return res;
}

Teacher.prototype.isTeaching = function(student) {
    return this.clazzes.some(clazz => {
        return clazz.hasStudent(student);
    })
}

Teacher.prototype.notifyStudentAppended = function(notification) {
    console.log(notification);
}

Teacher.prototype.notifyLeaderAssigned = function(notification) {
    console.log(notification);
}

module.exports = Teacher;