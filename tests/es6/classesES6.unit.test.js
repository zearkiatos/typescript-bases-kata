const { Avenger, FlyingAvenger } = require('../../src/es6/classesES6');
describe('Unit test suite classes in EcmaScript 6', () => {
    let logSpyOn;
    beforeAll(() => {
        logSpyOn = jest.spyOn(console, 'log');
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    afterAll(() => {
        jest.restoreAllMocks();
    });
    test('Should create a class and get by console log', () => {
        const hulk = new Avenger('Hulk', 9001);

        console.log(hulk);

        expect(logSpyOn).toHaveBeenCalled();
        expect(logSpyOn).toHaveBeenLastCalledWith(hulk);
    });

    test('Should create an object from avenger class with default values', () => {
        const hulk = new Avenger();
        const nameExpected = 'No Name';
        const powerExpected = 0;

        expect(hulk.name).toBe(nameExpected)
        expect(hulk.power).toBe(powerExpected);
    });

    test('Should create a object of class Flying Avenger', () => {
        const falcon = new FlyingAvenger('Falcon', 50);

        console.log(falcon);

        expect(logSpyOn).toHaveBeenCalled();
        expect(logSpyOn).toHaveBeenLastCalledWith(falcon);
    });

    test('Should create an object from flying avenger class with default values', () => {
        const hulk = new FlyingAvenger();
        const nameExpected = 'No Name';
        const powerExpected = 0;

        expect(hulk.name).toBe(nameExpected)
        expect(hulk.power).toBe(powerExpected);
    });

});