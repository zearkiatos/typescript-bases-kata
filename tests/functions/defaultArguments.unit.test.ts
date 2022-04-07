import { fullName } from '../../src/functions/defaultArguments';
describe('Unit test suites for default arguments into the functions', () => {
    test('Should return only the firstName without upper case', () => {
        const resultExpected: string = "Pedro Capriles";

        const theFullName: string = fullName('Pedro', 'Capriles');

        expect(theFullName).toBe(resultExpected);
    });

    test('Should return only the firstName with upper case', () => {
        const resultExpected: string = "PEDRO CAPRILES";

        const theFullName: string = fullName('Pedro', 'Capriles', true);

        expect(theFullName).toBe(resultExpected);
    });
});