const Employee = require('../lib/Employee');

describe('Object creation', () => {
    it('New object should be created', () => {
        const object = new Employee ('Reagin', '13','reagintt@gmail.com','Engineer');
        expect(typeof object != 'undefined').toBe(true);
    });
});

describe('Render Items', () => {
    it('Correctly gets name', () => {
        const name = 'Reagin';
        const response = new Employee ('Reagin', '13','reagintt@gmail.com','Engineer');

        expect(response.getName()).toBe(name);
    });

    it('Correctly gets id', () => {
        const id = '13';
        const response = new Employee ('Reagin', '13','reagintt@gmail.com','Engineer');

        expect(response.getId()).toBe(id);
    });

    it('Correctly gets email', () => {
        const email = 'rturner@gmail.com';
        const response = new Employee ('Reagin', '13','reagintt@gmail.com','Engineer');

        expect(response.getEmail()).toBe(email);
    });

    it('Correctly returns role', () => {
        const role = 'Engineer';
        const response = new Employee ('Reagin', '13','reagintt@gmail.com','Engineer');

        expect(response.getRole()).toBe(role);
    });
});