import Validations from '../../src/namespaces/validations';
describe('Test suite for Namespaces function', () => {
    test('Should be falsy if the text have less than 3 characters', () => {
        const result = Validations.validateText('Hi');
        
        expect(result).toBeFalsy();
    });

    test('Should be truthy if the text have grant than 3 characters', () => {
        const result = Validations.validateText('Hi there');
        
        expect(result).toBeTruthy();
    });

    test('Should be falsy if the date does not have the correct type', () => {
        const result = Validations.validateDate(new Date('2000-02-40'));
        
        expect(result).toBeFalsy();
    });

    test('Should be truthy if the date does not have the correct type', () => {
        const result = Validations.validateDate(new Date('2022-05-23'));
        
        expect(result).toBeTruthy();
    });
});