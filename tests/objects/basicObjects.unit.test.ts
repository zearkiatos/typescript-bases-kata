import { flash } from '../../src/objects/basicObjects';
describe('Unit test suites for basic objects', () => {
    test('Should return the type for each attributes', () => {
        expect(typeof flash.age).toBe('number');
        expect(typeof flash.name).toBe('string');
        expect(typeof flash.powers).toBe('object');    
    });
});