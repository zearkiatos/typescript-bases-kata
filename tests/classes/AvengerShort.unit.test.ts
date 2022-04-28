import AvengerShort from '../../src/classes/AvengerShort';
describe('Unit test suite for Avenger short class', () => {
    
    test('Should create a class and get by console log', () => {
        const antman: AvengerShort = new AvengerShort('Antman', 'Captain');

        expect(AvengerShort.averageAge).toBe(35);
        expect(antman.realName).toBeUndefined();
    });
});