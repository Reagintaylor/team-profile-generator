const Engineer = require('../lib/Engineer');

describe('Object creation', () => {
    it('New object should be created', () => {
        const object = new Engineer ('Reagin', '13','reagintt@gmail.com','reagin.taylor');
        expect(typeof object != 'undefined').toBe(true);
    });
});

describe('Render Items', () => {
    it('Correctly gets name', () => {
        const name = 'Reagin';
        const response = new Engineer ('Reagin', '13','reagintt@gmail.com','reagin.taylor');

        expect(response.getName()).toBe(name);
    });

    it('Correctly gets id', () => {
        const id = '13';
        const response = new Engineer ('Reagin', '13','reagintt@gmail.com','reagin.taylor');

        expect(response.getId()).toBe(id);
    });

    it('Correctly gets email', () => {
        const email = 'reagintt@gmail.com';
        const response = new Engineer ('Reagin', '13','reagintt@gmail.com','reagin.taylor');

        expect(response.getEmail()).toBe(email);
    });

    it('Correctly gets github', () => {
        const github = 'reagin.taylor';
        const response = new Engineer ('Reagin', '13','reagintt@gmail.com','reagin.taylor');

        expect(response.getGithub()).toBe(github);
    });

});
