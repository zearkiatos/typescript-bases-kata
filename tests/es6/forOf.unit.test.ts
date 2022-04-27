import { avengers } from '../../src/es6/forOf';
describe('Unit test suite for for Of loop', () => {
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
    test('Should iteration an array with for of', () => {
        for(const avenger of avengers) {
            console.log(avenger);
        }

        expect(logSpyOn).toHaveBeenCalled();
        expect(logSpyOn).toHaveBeenCalledTimes(3);
        expect(logSpyOn).toHaveBeenNthCalledWith(1,avengers[0]);
        expect(logSpyOn).toHaveBeenNthCalledWith(2,avengers[1]);
        expect(logSpyOn).toHaveBeenNthCalledWith(3,avengers[2]);
    });
});