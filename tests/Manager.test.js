const Manager = require('../lib/Manager');

describe('Manager', () => {
    it("should return the manager's name, ID, email, and office number", () => {
        const employeeStr = new Manager('Freddy', 4, 'freddykwak123@gmail.com', 5);

        expect(employeeStr.name).toEqual('Freddy');
        expect(employeeStr.ID).toEqual(4);
        expect(employeeStr.email).toEqual('freddykwak123@gmail.com');
        expect(employeeStr.officeNumber).toEqual(5);
    });
    
    describe('getRole', () => {
        it('should return a string of Manager', () => {
            const employeeStr = new Manager().getRole();

            expect(employeeStr).toEqual('Manager');
        });
    });

    describe('getOfficeNumber', () => {
        it("should return the Manager's office number", () => {
            const employeeStr = new Manager('Freddy', 4, 'freddykwak123@gmail.com', 5);

            expect(employeeStr.getOfficeNumber()).toEqual(5);
        });
    });
});