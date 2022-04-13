import {
  sum,
  count,
  callToBatman,
  unifiedHero,
  donDoNothingEither,
} from "../../src/functions/app";
describe("Unit test suites for app exercises for functions", () => {
  let consoleSpyOn:any;

  beforeAll(() => {
    consoleSpyOn = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("Should sum two numbers", () => {
    const resultExpected: number = 20;

    const result: number = sum(5, 15);

    expect(result).toBe(resultExpected);
  });

  test("Should count a array length", () => {
    const heroes: string[] = ["Flash", "Arrow", "Superman", "Green Lighter"];
    const resultExpected: number = 4;

    const result: number = count(heroes);

    expect(result).toBe(resultExpected);
  });

  test("Should call to batman", () => {
    const consoleSpyOn: any = jest.spyOn(console, "log");
    const resultExpected: string = "Batisignal activated";
    const call: boolean = true;

    callToBatman(call);

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledWith(resultExpected);
  });

  test("Should not call to batman", () => {
    const call: boolean = false;

    callToBatman(call);

    expect(consoleSpyOn).not.toHaveBeenCalled();
  });

  test("Should add heroes with rest ", () => {
    const resultExpected: string = "Deadpool, Iron Man";

    const result: string = unifiedHero("Deadpool", "Iron Man");

    expect(result).toBe(resultExpected);
  });
});
