const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubName) {
        //get from parent
        super(name, id, email);
        this.githubName = githubName;
        this.role = "Engineer";
    };
    getGitHub() {
        return this.githubName;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Engineer;