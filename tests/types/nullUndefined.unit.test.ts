describe('Unit test suite for null and undefined type', () => {
    test('Should declarate and return a undefined variable', () => {
        const nothing: undefined = undefined;
        const expectedResult: string = "undefined";

        expect(typeof nothing).toBe(expectedResult);
        expect(nothing).toBeUndefined()
    });

    test('Should declarate and return a null variable', () => {
        const nothing: null = null;
        const expectedResult: string = "object";

        expect(typeof nothing).toBe(expectedResult);
        expect(nothing).toBeNull();
    });
});