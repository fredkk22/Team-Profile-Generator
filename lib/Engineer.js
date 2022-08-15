const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super(name, ID, email);
        this.github = github;
    }

    getGithub() {
        return 'https://github.com/' + this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

const engineer1 = new Engineer(this.engineerGit);

engineer1.getGithub();
engineer1.getRole();

module.exports = Engineer