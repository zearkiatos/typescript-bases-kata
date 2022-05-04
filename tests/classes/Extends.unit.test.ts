import { Xmen } from "../../src/classes/Extends";
describe("Test unit test for Extends", () => {
  let logSpyOn: any;
  beforeAll(() => {
    logSpyOn = jest.spyOn(console, "log");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should create a instance of Xmen, and access to the console logs calls", () => {
    const messageExpected: string = "Build an Avenger";
    const secondExpectedMessage:string = 'Build an Xmen';
    const fullNameExpected: string = "Wolverine Logan";

    const wolverine: Xmen = new Xmen("Wolverine", "Logan", true);
    wolverine.getFullNameFromXmen();

    expect(logSpyOn).toHaveBeenCalled();
    expect(logSpyOn).toHaveBeenCalledTimes(3);
    expect(logSpyOn).toHaveBeenNthCalledWith(1, messageExpected);
    expect(logSpyOn).toHaveBeenNthCalledWith(2, secondExpectedMessage);
    expect(logSpyOn).toHaveBeenNthCalledWith(3, fullNameExpected);
  });
});
