class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

const employee = new Employee(this.name, this.ID, this.email);

employee.getName();
employee.getID();
employee.getEmail();

module.exports = Employee