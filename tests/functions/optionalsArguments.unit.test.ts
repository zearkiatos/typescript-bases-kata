import { fullName } from '../../src/functions/optionalsArguments';
describe('Unit test suites for arguments optional into the functions', () => {
    test('Should return only the firstName', () => {
        const resultExpected: string = "Pedro";

        const theFullName: string = fullName('Pedro');

        expect(theFullName).toBe(resultExpected);
    });

    test('Should return a throw error when the first name is undefined', () => {
        const resultExpected: Error =new Error("The argument firstName is required");
        const undefinedFirstName:any = undefined;

        try {
            fullName(undefinedFirstName, 'Capriles');
        }
        catch(ex:any) {
            expect(ex.message).toBe(resultExpected.message);
        }
    });
});