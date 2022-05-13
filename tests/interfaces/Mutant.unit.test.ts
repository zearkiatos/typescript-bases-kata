import Mutant from "../../src/interfaces/Mutant";

describe("Unit suites test for Mutant class", () => {
  test("Should validate interface implementation", () => {
    const mutant: Mutant = new Mutant(40, "Iron Man", "Tony Stark");
    const resultExpected:string = 'Iron Man Tony Stark';
    
    expect(mutant).toBeDefined();
    expect(mutant instanceof Mutant).toBeTruthy();
    expect(mutant.mutantPower(20)).toBe(resultExpected);
  });
});
