const Intern = require('../lib/Intern');

describe('Intern', () => {
    it("should return the intern's name, ID, email, and school", () => {
        const employeeStr = new Intern('Freddy', 4, 'freddykwak123@gmail.com', 'NVOT Regional High School');

        expect(employeeStr.name).toEqual('Freddy');
        expect(employeeStr.ID).toEqual(4);
        expect(employeeStr.email).toEqual('freddykwak123@gmail.com');
        expect(employeeStr.school).toEqual('NVOT Regional High School');
    });
    
    describe('getRole', () => {
        it('should return a string of Intern', () => {
            const employeeStr = new Intern().getRole();

            expect(employeeStr).toEqual('Intern');
        });
    });

    describe('getSchool', () => {
        it("should return the intern's school", () => {
            const employeeStr = new Intern('Freddy', 4, 'freddykwak123@gmail.com', 'NVOT Regional High School');

            expect(employeeStr.getSchool()).toEqual('NVOT Regional High School');
        });
    });
});