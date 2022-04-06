import { fullName } from '../../src/functions/optionalsArguments';
describe('Unit test suites for arguments optional into the functions', () => {
    test('Should return only the firstName', () => {
        const resultExpected: string = "Pedro";

        const theFullName: string = fullName('Pedro');

        expect(theFullName).toBe(resultExpected);
    });
});