describe("Unit test suite for numbers type", () => {
    test("Should create a number data type", () => {
        const avengers = 10;

        expect(typeof avengers).toBe('number');
    });

    test("Should return an NaN", () => {
        const avengers = Number("1aa");

        expect(avengers).toBe(NaN);
    });
});