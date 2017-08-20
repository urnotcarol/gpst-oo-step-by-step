function Person(name, age) {
    this.name = name; 
    this.age = age;
    let PersonPrototype = Object.getPrototypeOf(this);
    if (PersonPrototype.hasOwnProperty("nextID")) {
        this.id = PersonPrototype.nextID++;
    } else {
        this.id = 0;
        PersonPrototype.nextID = 1;
    }
}

Person.prototype.introduce = function() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
}

module.exports = Person;