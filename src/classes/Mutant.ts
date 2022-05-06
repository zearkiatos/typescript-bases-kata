abstract class Mutant {
  constructor(public name: string, public realName: string) {}
}

class Xmen extends Mutant {
  saveTheWorld(): string {
    return "World saved";
  }
}

class Villian extends Mutant {
  conquerTheWorld(): string {
    return "Conquer the world";
  }
}

const printName = (character: Mutant): string => {
  return character.realName;
};

export { Mutant, Xmen, Villian, printName };
