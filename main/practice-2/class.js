function Class(number) {
    this.number = number;
}

Class.prototype.assignLeader = function(leader) {
    this.leader = leader;
}

module.exports = Class;