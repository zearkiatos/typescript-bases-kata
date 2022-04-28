import Avenger from '../../src/classes/Avenger';
describe('Unit test suite for Avenger class', () => {
    
    test('Should create a class and get by console log', () => {
        const antman: Avenger = new Avenger('Antman', 'Captain');

        expect(Avenger.averageAge).toBe(35);
        expect(antman.realName).toBeUndefined();
    });
});