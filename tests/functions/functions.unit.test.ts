import { returnName, activateBatiSignal } from '../../src/functions/functions';
describe('Unit test suite for functions', () => {
    test('Should execute a function and return the name of some hero', () => {
        const expectedResult: string = 'Flash';

        const hero: string = returnName();

        expect(hero).toBe(expectedResult);
    });

    test('Should execute a function and return a message for Batman', () => {
        const expectedResult: string = 'Batisignal activated!';

        const messageForBatman: string = activateBatiSignal();

        expect(typeof activateBatiSignal).toBe('function')
        expect(messageForBatman).toBe(expectedResult);
    });
});