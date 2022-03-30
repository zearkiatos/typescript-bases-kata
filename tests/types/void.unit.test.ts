import { callBatman, callSuperman } from '../../src/types/void';
describe('Unit test for void types', () => {
    test('Should return by default a value type undefined', () => {
        const calledBatman = callBatman();

        expect(typeof calledBatman).toBe('undefined');
    });

    test('Should return by default a value type undefined when callSuperman function', () => {
        const calledSupperman = callSuperman();

        expect(typeof calledSupperman).toBe('undefined');
    });
});