import {
  addNumbers,
  greet,
  saveTheWorld,
} from "../../src/functions/functionTypes";
describe("Unit test suite for functions types", () => {
  test("Should execute sum two numbers", () => {
    const expectedResult: number = 5;

    const result: number = addNumbers(2, 3);

    expect(result).toBe(expectedResult);
  });

  test("Should execute return a backtrick greet with the name", () => {
    const expectedResult: string = "Hello Pedro";

    const result: string = greet("Pedro");

    expect(result).toBe(expectedResult);
  });

  test("Should execute return a specific message", () => {
    const expectedResult: string = "The World is saved!";

    const result: string = saveTheWorld();

    expect(result).toBe(expectedResult);
  });

  test("Should change the variable data type", () => {
    let myFunction: Function | number;

    myFunction = 10;

    expect(myFunction).toBe(10);

    myFunction = addNumbers;

    expect(myFunction(1, 3)).toBe(4);

    myFunction = greet;

    expect(myFunction("José")).toBe("Hello José");

    myFunction = saveTheWorld;

    expect(myFunction()).toBe("The World is saved!");
  });

  test("Should declarate a function addNumbers and execute it", () => {
    let myFunction: (y: number, z: number) => number;

    myFunction = addNumbers;

    expect(myFunction(5, 5)).toBe(10);
  });

  test("Should declarate a function greet and execute it", () => {
    let myFunction: (name: string) => string;

    myFunction = greet;

    expect(myFunction('Pedro')).toBe("Hello Pedro");
  });

  test("Should declarate a function saveTheWorld and execute it", () => {
    let myFunction: () => string;

    myFunction = saveTheWorld;

    expect(saveTheWorld()).toBe("The World is saved!");
  });
});
