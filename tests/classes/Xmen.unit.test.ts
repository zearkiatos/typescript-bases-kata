import Xmen from '../../src/classes/Xmen';
describe('Unit test suite for Xmen class', () => {
    test('Should test get the fullName', () => {
        const fullNameExpected: string = 'Wolverine - Logan';
        const xmen = new Xmen('Wolverine', 'Logan', true);

        const fullName:string = xmen.fullName;

        expect(fullName).toBe(fullNameExpected);
    });

    test('Should test set the fullName and only change the name', () => {
        const fullNameExpected: string = 'Guepardo - Logan';
        const xmen = new Xmen('Wolverine', 'Logan', true);

        xmen.fullName = 'Guepardo';
        const fullName:string = xmen.fullName;

        expect(fullName).toBe(fullNameExpected);
    });

    test('Should generate an error if the name is less than 3 characters', () => {
        const xmen = new Xmen('Wolverine', 'Logan', true);
        const errorExpected: string = 'The name should be granter than 3';
        
        const tryToSetFullName = (): void => {
            try {
                xmen.fullName = 'Wo'
            }
            catch(ex: any) {
                console.log(ex);
                throw ex;
            }
        };

        expect(tryToSetFullName).toThrow();
        expect(tryToSetFullName).toThrowError(errorExpected);

    });
})