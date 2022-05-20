namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3;
  };

  export const validateDate = (date: Date) => {
    return !isNaN(date.valueOf());
  };
}

export default Validations;


