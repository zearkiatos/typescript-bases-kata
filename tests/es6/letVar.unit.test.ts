import { getName } from '../../src/es6/letVar';
describe("Unit test suite for let and var using", () => {
    let consoleSpyOn:any;
    beforeAll(() => {
        consoleSpyOn = jest.spyOn(console, 'log');
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('Should declarate and show the value with var', () => {
        var name: string = 'Pedro';

        console.log(name);

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(name);
    });

    test('Should declarate and show the value with let', () => {
        let name: string = 'Pedro';

        console.log(name);

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(name);
    });

    test('Should declarate and show the value with const', () => {
        const name: string = 'Pedro';

        console.log(name);

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(name);
    });

    test('Should execute getName', () => {
        const resultExpected: string = 'This is a name';

        getName();

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(resultExpected);
    });
});