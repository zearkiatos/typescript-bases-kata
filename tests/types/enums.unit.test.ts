import { AudioLevel } from '../../src/enums/AudioLevel';
describe('Unit test for enums types', () => {
    test('Should return a number value depend the constant enum', () => {
        const expectResult:number = 1;

        const audioLevel = AudioLevel.medium;

        expect(audioLevel).toBe(expectResult);
    });
});