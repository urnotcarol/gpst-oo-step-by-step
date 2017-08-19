const Person = require('./person');

function Teacher(name, age, classes) {
    Person.call(this, name, age);
    this.classes = classes;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.superIntroduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function() {
    let res = `${this.superIntroduce()} I am a Teacher. I teach `;
    if (this.classes.length === 0) {
        res += "No Class.";
    } else {
        res += "Class ";
        res += this.classes.map(klass => {
            return klass.number;
        }).join(",");
        res += ".";
    }
    return res;
}

module.exports = Teacher;