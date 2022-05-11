import { Client } from '../../src/interfaces/completeStructures';
describe("Unit test suites for complete structures", () => { 
    test('Should validate a structure for a client', () => {
        const client: Client = {
            name: 'Pedro',
            age: 32,
            address: {
                id: 125,
                zip: 'KY2 SUD',
                city: 'Ottawa'
            }
        }

        const secondClient: Client = {
            name: 'Melisa',
            age: 30,
            address: {
                id: 120,
                zip: 'K2S U2A',
                city: 'Toronto'
            }
        }

        expect(client).toBeDefined();
        expect(secondClient).toBeDefined();
    });
});