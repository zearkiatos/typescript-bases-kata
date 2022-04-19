import { Hero } from '../../src/objects/unionTypes';
describe('Unit test suites for union types', () => {
    test('Should create a custom types', () => {
        let myCustomVariable: (string | number | Hero) = 'Pedro';

        expect(typeof myCustomVariable).toBe('string');

        myCustomVariable = 20;

        expect(typeof myCustomVariable).toBe('number');

        myCustomVariable = {
            name: 'Bruce',
            age: 43,
            powers: ['Any']
        };

        expect(typeof myCustomVariable).toBe('object');
    });
});