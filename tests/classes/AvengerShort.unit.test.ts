import AvengerShort from '../../src/classes/AvengerShort';
describe('Unit test suite for Avenger short class', () => {
    
    test('Should create a class and get by console log', () => {
        const antman: AvengerShort = new AvengerShort('Antman', 'Captain');

        expect(AvengerShort.averageAge).toBe(35);
        expect(antman.realName).toBeUndefined();
    });

    test('Should return the bio of Antman', () => {
        const antman: AvengerShort = new AvengerShort('Antman', 'Captain');
        const resultExpected:string = 'Antman (Captain)';

        const bio = antman.bio();

        expect(bio).toBe(resultExpected);
    });

    test('Should return the average of the avengers via static method', () => {
        const resultExpected:number = 35;

        const age = AvengerShort.getAverageAge();

        expect(age).toBe(resultExpected);
    });
});