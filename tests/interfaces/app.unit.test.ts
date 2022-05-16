import random from 'random-name';
import { Auto, Villain, City } from '../../src/interfaces/app';
import CitizenBuilder from '../builders/CitizenBuilder';

describe("Test unit to evaluate the interface", () => {
    let consoleSpyOn:any;

    beforeAll(() => {
      consoleSpyOn = jest.spyOn(console, "log");
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
    test('Should create a function than received an auto interface', () => {
        const resultExpected:string = '...... gogogo!!!';
        const batimovil: Auto = {
            on: false,
            maximanVelocity: 0,
            speedUp() {
                console.log('...... gogogo!!!')
            }
        }
        const car = (auto: Auto): void => {
            auto.on = true;
            auto.maximanVelocity = 100;
            auto.speedUp();
        }

        car(batimovil);

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(resultExpected);
    });

    test('Should create a function than received an Villain interface', () => {
        const resultExpected:string = 'JAJAJAJA';
        const guason: Villain = {
            laugh: true,
            eat: true,
            cry: false
        }
        const laugh = (villain: Villain): void => {
            villain.laugh && console.log('JAJAJAJA');
        }

        laugh(guason);

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(resultExpected);
    });

    test('Should create a function than received an Villain interface and the villain not laugh', () => {
        const ben: Villain = {
            laugh: false,
            eat: true,
            cry: true
        }
        const laugh = (villain: Villain): void => {
            villain.laugh && console.log('JAJAJAJA');
        }

        laugh(ben);

        expect(consoleSpyOn).not.toHaveBeenCalled();
    });

    test('Should create a function than return the quantity of citizens', () => {
        const ben: Villain = {
            laugh: false,
            eat: true,
            cry: true
        }
        const laugh = (villain: Villain): void => {
            villain.laugh && console.log('JAJAJAJA');
        }

        laugh(ben);

        expect(consoleSpyOn).not.toHaveBeenCalled();
    });
});

const massiveRandomCitizens = (quantities: number): any[] => {
    const citizens:any[];
    for(let i= 0; i<quantities; i++) {
        
    }
    return 
}