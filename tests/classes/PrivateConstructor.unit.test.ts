import { Apocalypsis } from "../../src/classes/PrivateConstructor";

describe("Unit suite test for constructors private classes", () => {
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
  test("Should create Apocalypsis instance", () => {
    const apocalipsis: Apocalypsis = Apocalypsis.getInstance("I'm Apocalypsis... the only one");
    const resultExpected: string = "I'm Apocalypsis... the only one";

    console.log(apocalipsis.name);

    expect(apocalipsis).toBeDefined();
    expect(apocalipsis instanceof Apocalypsis).toBeTruthy();
    expect(logSpyOn).toHaveBeenCalled();
    expect(logSpyOn).toHaveBeenCalledWith(resultExpected);
  });

  test("Should change the name", () => {
    const apocalipsis: Apocalypsis = Apocalypsis.getInstance("I'm Apocalypsis... the only one");
    const resultExpected: string = "I'm Apocalypsis";
    apocalipsis.changeName("I'm Apocalypsis")

    console.log(apocalipsis.name);

    expect(apocalipsis).toBeDefined();
    expect(apocalipsis instanceof Apocalypsis).toBeTruthy();
    expect(logSpyOn).toHaveBeenCalled();
    expect(logSpyOn).toHaveBeenCalledWith(resultExpected);
  });
});
