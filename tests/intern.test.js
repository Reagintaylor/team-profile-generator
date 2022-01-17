const Intern = require('../lib/Intern');

describe('Object creation', () => {
    it('New object should be created', () => {
        const object = new Intern ('Reagin', '13','reagintt@gmail.com','Georgia Tech');
        expect(typeof object != 'undefined').toBe(true);
    });
});

describe('Render Items', () => {
    it('Correctly gets name', () => {
        const name = 'Reagin';
        const response = new Intern ('Reagin', '13','reagintt@gmail.com','Georgia Tech');

        expect(response.getName()).toBe(name);
    });

    it('Correctly gets id', () => {
        const id = '13';
        const response = new Intern ('Reagin', '13','reagintt@gmail.com','Georgia Tech');

        expect(response.getId()).toBe(id);
    });

    it('Correctly gets email', () => {
        const email = 'reagintt@gmail.com';
        const response = new Intern ('Reagin', '13','reagintt@gmail.com','Georgia Tech');

        expect(response.getEmail()).toBe(email);
    });

    it('Correctly gets school', () => {
        const school = 'Georgia Tech';
        const response = new Intern ('Reagin', '13','reagintt@gmail.com','Georgia Tech');

        expect(response.getSchool()).toBe(school);
    });

});
