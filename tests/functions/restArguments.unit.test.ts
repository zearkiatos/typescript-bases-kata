import { fullName } from '../../src/functions/restArguments';

describe('Unit test suites for rest arguments into the functions', () => {
    test('Should receive various values and return the full name', () => {
        const resultExpected: string = 'Clark Joseph Kent';

        const superman:string = fullName('Clark', 'Joseph', 'Kent');

        expect(superman).toBe(resultExpected);
    });
});