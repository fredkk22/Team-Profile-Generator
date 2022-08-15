const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

const manager1 = new Manager(this.officeNumber);

manager1.getOfficeNumber();
manager1.getRole();

module.exports = Manager