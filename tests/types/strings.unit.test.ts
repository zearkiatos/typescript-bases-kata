describe("Unit test suite for strings type", () => {
    test("Should create a strings with inference", () => {
        const batman = 'Batman';

        expect(typeof batman).toBe('string');
    });

    test("Should create a strings with inference with backtip", () => {
        const blackVulcan: string = `Hero Black Vulcan`;

        expect(typeof blackVulcan).toBe('string');
    });

    test("Should transform a string to a upper case string", () => {
        const greenLighter: string = "Green Lighter";
        const expectedResult:string = "GREEN LIGHTER";

        const stringUpper: string = greenLighter.toUpperCase();

        expect(stringUpper).toBe(expectedResult);
    });

    test("Should call a console log with a template string with backtip", () => {
        const hero: string = "Batman";
        const expectedResult:string = "I'm Batman";
        const consoleSpy = jest.spyOn(console, 'log');

        console.log(`I'm ${hero}`);

        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(expectedResult);
    });
});