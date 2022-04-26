import { avengers, printAvenger, printRestAvengers, avengersArray } from '../../src/es6/destructuringObject';
describe('Unit test suite for destructuring objects', () => {
    let logSpyOn: any;
    beforeAll(() => {
        logSpyOn = jest.spyOn(console, 'log');
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    afterAll(() => {
        jest.restoreAllMocks();
    });
    test('Should destructing object avengers', () => {
        const { power, vision } = avengers;

        console.log(power, vision.toUpperCase());

        expect(logSpyOn).toHaveBeenCalled();
        expect(logSpyOn).toHaveBeenCalledWith(1500, "PAUL BETTANY");
    });

    test('Should print by console an avenger', () => {
        const resultExpected:string = avengers.vision;

        printAvenger(avengers);

        expect(logSpyOn).toHaveBeenCalled();
        expect(logSpyOn).toHaveBeenCalledWith(resultExpected);
    });

    test('Should get by console iron man and the rest of the avengers', () => {
        const resultExpected:string = avengers.ironMan;
        const { ironMan, ...restExpected} = avengers;

        printRestAvengers(avengers);

        expect(logSpyOn).toHaveBeenCalled();
        expect(logSpyOn).toHaveBeenCalledWith(resultExpected, restExpected);
    });

    test('Should destructuring an array to get Iron Man', () => {
       const resultExpected:string = 'Iron Man';

       const [, ironMan] = avengersArray;

        expect(ironMan).toBe(resultExpected);
    });


})