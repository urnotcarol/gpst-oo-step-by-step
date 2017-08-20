function Class(number) {
    this.number = number;
    this.students = [];
    this.teachers = [];
}

Class.prototype.appendMember = function(student) {
    this.students.push(student);
    this.teachers.forEach(teacher => {
        let notification = `I am ${teacher.name}. I know ${student.name} has joined Class ${this.number}.`;
        teacher.notifyStudentAppended(notification);
    });
}

Class.prototype.hasStudent = function(student) {
    return this.students.includes(student);
}

Class.prototype.assignLeader = function(leader) {
    if (this.hasStudent(leader)) {
        this.leader = leader;
        this.teachers.forEach(teacher => {
            let notification = `I am ${teacher.name}. I know ${leader.name} become Leader of Class ${this.number}.`;
            teacher.notifyLeaderAssigned(notification);
        })
        return "Assign team leader successfully.";
    } else {
        return "It is not one of us.";
    } 
    
}

module.exports = Class;