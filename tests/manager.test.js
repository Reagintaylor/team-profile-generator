const Manager = require('../lib/Manager');

describe('Object creation', () => {
    it('New object should be created', () => {
        const object = new Manager ('Reagin', '13','reagintt@gmail.com','312');
        expect(typeof object != 'undefined').toBe(true);
    });
});

describe('Render Items', () => {
    it('Correctly gets name', () => {
        const name = 'Reagin';
        const response = new Manager ('Reagin', '13','reagintt@gmail.com','312');

        expect(response.getName()).toBe(name);
    });

    it('Correctly gets id', () => {
        const id = '13';
        const response = new Manager ('Reagin', '13','reagintt@gmail.com','312');

        expect(response.getId()).toBe(id);
    });

    it('Correctly gets email', () => {
        const email = 'reagintt@gmail.com';
        const response = new Manager ('Reagin', '13','reagintt@gmail.com','312');

        expect(response.getEmail()).toBe(email);
    });

    it('Correctly gets officNumb', () => {
        const officNumb = '312';
        const response = new Manager ('Reagin', '13','reagintt@gmail.com','312');

        expect(response.getOfficeNumber()).toBe(officNumb);
    });

    it('Correctly gets role', () => {
        const manager = 'Manager';
        const response = new Manager ('Reagin', '13','reagintt@gmail.com','312');

        expect(response.getRole()).toBe(manager);
    });

});
