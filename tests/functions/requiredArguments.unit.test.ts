import { fullName } from '../../src/functions/requiredArguments';
describe('Unit test suites for arguments required into the functions', () => {
    test('Should return a full name', () => {
        const resultExpected: string = "Pedro Capriles";

        const theFullName: string = fullName('Pedro', 'Capriles');

        expect(theFullName).toBe(resultExpected);
    });

    test('Should return a return an error if the firstName is a empty value', () => {
        let noName: any;
        const lastName: string = 'Capriles';
        const messageExpected: string = 'The argument firstName is required';

        try {
            fullName(noName, lastName);
        }
        catch(ex: any) {
            expect(ex.message).toBe(messageExpected);
        }
    });
});