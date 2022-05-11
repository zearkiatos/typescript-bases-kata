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
            },
            getFullAddress() {
                return `${this.address.id} ${this.address.zip} ${this.address.city}`;
            }
        }

        const secondClient: Client = {
            name: 'Melisa',
            age: 30,
            address: {
                id: 120,
                zip: 'K2S U2A',
                city: 'Toronto'
            },
            getFullAddress() {
                return `${this.address.id} ${this.address.zip} ${this.address.city}`;
            }
        }

        expect(client).toBeDefined();
        expect(secondClient).toBeDefined();
    });

    test('Should get the full address from client', () => {
        const client: Client = {
            name: 'Pedro',
            age: 32,
            address: {
                id: 125,
                zip: 'KY2 SUD',
                city: 'Ottawa'
            },
            getFullAddress() {
                return `${this.address.id} ${this.address.zip} ${this.address.city}`;
            }
            
        }
        const addressExpected: string = '125 KY2 SUD Ottawa'
       
        const fullAddress:string = client.getFullAddress();

        expect(client).toBeDefined();
        expect(fullAddress).toBe(addressExpected);
    });
});