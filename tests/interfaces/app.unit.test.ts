import { Auto, Villain, City, Person, Genre, CivilStatus } from '../../src/interfaces/app';
import CitizenBuilder from '../builders/CitizenBuilder';
const { faker } = require('@faker-js/faker');
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

    test('Should create a new Person than implement the PersonalData interface and return a bio by console', () => {
        const citizen = massiveRandomCitizens(10000000);
        const quantityExpected:number = 10000000;

        const citizenQuantity: City = (citizens: string[]): number => {
            return citizens.length;
        }

        const peopleQuantity:number = citizenQuantity(citizen);

        expect(peopleQuantity).toBe(quantityExpected);
    });

    test('Should return the citizens quantity', () => {
        const bioExpected:string = 'Name: Pedro Capriles, Age: 32, Genre: Male, Civil Status: Single';

        const person: Person = new Person('Pedro Capriles', 32, Genre.MALE, CivilStatus.SINGLE);
        person.bio();

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(bioExpected);
    });
});

const massiveRandomCitizens = (quantities: number): any[] => {
    const citizens:string[] = [];
    for(let i= 0; i<quantities; i++) {
        let citizen:any = new CitizenBuilder()
            .withFirstName(faker.name.firstName())
            .withMiddleName(faker.name.middleName())
            .withLastName(faker.name.lastName())
            .build()
        citizens.push(`${citizen.firstName} ${citizen.middleName} ${citizen.lastName}`);
        
    }
    return citizens;
}