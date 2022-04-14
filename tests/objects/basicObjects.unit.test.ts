import { flash, heroe } from '../../src/objects/basicObjects';
describe('Unit test suites for basic objects', () => {
    test('Should return the type for each attributes', () => {
        expect(typeof flash.age).toBe('number');
        expect(typeof flash.name).toBe('string');
        expect(typeof flash.powers).toBe('object');    
    });

    test('Should execute and return default heroe name', () => {
        const expectedName: string = 'Flash';

        expect(heroe.getName()).toBe(expectedName);  
    });

    test('Should use the type hero to create other hero', () => {
        let superman = heroe;
        const expectedName: string = 'Superman';

        superman = {
            age: 30,
            name: 'Superman',
            powers: ['super force', 'laser vision', 'super velocity'],
            getName() {
                return this.name;
            }
        }
        expect(typeof superman.age).toBe('number');
        expect(typeof superman.name).toBe('string');
        expect(typeof superman.powers).toBe('object');  
        expect(typeof superman.getName).toBe('function');
        expect(superman.getName()).toBe(expectedName);  
    });
});