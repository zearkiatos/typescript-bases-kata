import {
  Auto,
  Villan,
  Charles,
  Apocalypsis,
  Mystique,
} from "../../src/objects/app";
describe("Unit test suite for App to custom types", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test("Should create a object type Auto", () => {
    const batimovil: Auto = {
      bodywork: "Black",
      model: "6x6",
      bulletproof: true,
      passengers: 4,
    };

    expect(typeof batimovil.bodywork).toBe("string");
    expect(typeof batimovil.model).toBe("string");
    expect(typeof batimovil.bulletproof).toBe("boolean");
    expect(typeof batimovil.passengers).toBe("number");
  });

  test("Should create a object type Auto with optional function", () => {
    const consoleLogSpyOn = jest.spyOn(console, "log");
    const resultExpected: string = "Shooting";

    const bumblebee: Auto = {
      bodywork: "Yellow and black",
      model: "4x2",
      bulletproof: true,
      passengers: 4,
      shoot() {
        console.log("Shooting");
      },
    };

    bumblebee.shoot?.();

    expect(typeof bumblebee.bodywork).toBe("string");
    expect(typeof bumblebee.model).toBe("string");
    expect(typeof bumblebee.bulletproof).toBe("boolean");
    expect(typeof bumblebee.passengers).toBe("number");
    expect(typeof bumblebee.shoot).toBe("function");
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledWith(resultExpected);
  });

  test("Should an array of villans custom type", () => {
    const villans: Villan[] = [
      {
        name: "Lex Luthor",
        age: 54,
        mutant: false,
      },
      {
        name: "Erik Magnus Lehnsherr",
        age: 49,
        mutant: true,
      },
      {
        name: "James Logan",
        age: undefined,
        mutant: true,
      },
    ];

    expect(typeof villans[1].name).toBe("string");
    expect(typeof villans[1].age).toBe("number");
    expect(typeof villans[1].mutant).toBe("boolean");
    expect(typeof villans[2].age).toBe("undefined");
  });

  test("Should a superhero Charles", () => {
    const charles: Charles = {
      power: "psychic",
      height: 1.78,
    };

    expect(typeof charles.power).toBe("string");
    expect(typeof charles.height).toBe("number");
  });

  test("Should a group Apocalypsis", () => {
    const apocalypsis: Apocalypsis = {
      leader: true,
      members: ["Magnet", "Storm", "Psylocke", "Angel"],
    };

    expect(typeof apocalypsis.leader).toBe("boolean");
    expect(typeof apocalypsis.members).toBe("object");
  });

  test("Should a Mystique with Multiples custom types", () => {
    let mystique: Mystique;
    const charles: Charles = {
      power: "psychic",
      height: 1.78,
    };

    mystique = charles;

    expect(typeof mystique.power).toBe("string");
    expect(typeof mystique.height).toBe("number");

    const apocalypsis: Apocalypsis = {
      leader: true,
      members: ["Magnet", "Storm", "Psylocke", "Angel"],
    };

    mystique = apocalypsis;

    expect(typeof mystique.leader).toBe("boolean");
    expect(typeof mystique.members).toBe("object");
  });
});
