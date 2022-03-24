describe('Unit test suite for Tuples', () => {
    test('Should create a tuple with three types and only accept the specifict data type', () => {
        const hero: [string, number, boolean] = ['Dr. Strange', 100, true];

        expect(typeof hero[0]).toBe('string');
        expect(typeof hero[1]).toBe('number');
        expect(typeof hero[2]).toBe('boolean');
    });
});