import { Xmen, Mutant, Villian, printName } from "../../src/classes/Mutant";

describe("Suite Unit test class for Mutant abstract class", () => {
  test("Should create a new instance of Xmen", () => {
    const xmen: Xmen = new Xmen("Wolverine", "Logan");

    expect(xmen).toBeDefined();
    expect(xmen instanceof Mutant).toBeTruthy();
  });

  test("Should create a new instance of Villian", () => {
    const villian: Villian = new Villian("Magneto", "Magnus");

    expect(villian).toBeDefined();
    expect(villian instanceof Mutant).toBeTruthy();
  });

  test("Should execute a method save the world", () => {
    const xmen: Xmen = new Xmen("Wolverine", "Logan");
    const resultExpected: string = "World saved";

    const result: string = xmen.saveTheWorld();

    expect(resultExpected).toBe(result);
  });

  test("Should execute a method conquer the world", () => {
    const villian: Villian = new Villian("Magneto", "Magnus");
    const resultExpected: string = "Conquer the world";

    const result: string = villian.conquerTheWorld();

    expect(resultExpected).toBe(result);
  });

  test("Should get a character name from a Mutant instance type", () => {
    const villian: Villian = new Villian("Magneto", "Magnus");
    const nameExpected: string = "Magnus";

    const name: string = printName(villian);

    expect(nameExpected).toBe(name);
  });
});
