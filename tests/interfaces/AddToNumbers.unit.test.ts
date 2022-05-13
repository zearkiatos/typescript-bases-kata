import AddTwoNumbers from "../../src/interfaces/AddTwoNumbers";

describe("Unit suites test for the addToNumbers interface", () => {
  test("Should implement the interface to create a function than receive two numbers", () => {
    let addNumbersFunction: AddTwoNumbers;
    const numberExpected: number = 20;
    addNumbersFunction = (a: number, b: number) => {
      return a + b;
    };

    const result: number = addNumbersFunction(15, 5);

    expect(result).toBe(numberExpected);
  });
});
