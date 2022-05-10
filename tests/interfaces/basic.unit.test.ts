import { Hero } from '../../src/interfaces/basic';
describe("Unit test suites for basic interface use", () => { 
    test('Should create an implementation of hero interface', () => {
        const superman: Hero = {
            name: 'Clark Kent',
            age: 60,
            powers: [1],
            getName() {
                return this.name
            }
        };
        const nameExpected: string = 'Clark Kent';

        const name = superman.getName?.();

        expect(superman).toBeDefined();
        expect(nameExpected).toBe(name);
    });
});