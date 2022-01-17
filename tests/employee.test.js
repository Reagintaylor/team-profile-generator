const Employee = require('../lib/employee');

describe('Object creation', () => {
    it('New object should be created', () => {
        const object = new Employee ('Reagin', '13','reagintt@gmail.com','Engineer');
        expect(typeof object != 'undefined').toBe(true);
    });
});

describe('Render Items', () => {
    it('Correctly returns name', () => {
        const name = 'Reagin';
        const response = new Employee ('Reagin', '01','reagintt@yahoo.com','Intern');

        expect(response.getName()).toBe(name);
    });

    it('Correctly gets id', () => {
        const id = '11';
        const response = new Employee ('Ridge', '11','ridgett@aol.com','Manager');

        expect(response.getId()).toBe(id);
    });

    it('Correctly gets email', () => {
        const email = 'rturner@gmail.com';
        const response = new Employee ('Rodney', '22','rturner@gmail.com','Engineer');

        expect(response.getEmail()).toBe(email);
    });

    it('Correctly returns role', () => {
        const role = 'Engineer';
        const response = new Employee ('Rhonda', '33','floyturner@gmail.com','Engineer');

        expect(response.getRole()).toBe(role);
    });
});