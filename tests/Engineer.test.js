const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it("should return the engineer's name, ID, email, and github username", () => {
        const employeeStr = new Engineer('Freddy', 4, 'freddykwak123@gmail.com', 'fredkk22');

        expect(employeeStr.name).toEqual('Freddy');
        expect(employeeStr.ID).toEqual(4);
        expect(employeeStr.email).toEqual('freddykwak123@gmail.com');
        expect(employeeStr.github).toEqual('fredkk22');
    });
    
    describe('getRole', () => {
        it('should return a string of Engineer', () => {
            const employeeStr = new Engineer().getRole();

            expect(employeeStr).toEqual('Engineer');
        });
    });

    describe('getGithub', () => {
        it('should return the github username of the engineer', () => {
            const employeeStr = new Engineer('Freddy', 4, 'freddykwak123@gmail.com', 'fredkk22');

            expect(employeeStr.getGithub()).toEqual('fredkk22');
        });
    });
});