import { fakeError } from '../../src/types/never';
describe('Unit test suite for numbers type', () => {
    test('Should generate an error', () => {
        const errorExpected: string = '❌ Error ocurred 😱';
        try {
            fakeError('❌ Error ocurred 😱');
        }
        catch(ex:any) {              
            expect(ex.message).toBe(errorExpected);
        }
    });
});