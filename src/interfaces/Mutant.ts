import Xmen from "./Xmen";
import Human from "./Human";

class Mutant implements Xmen, Human {
  mutantPower(id: number): string {
    return `${this.name} ${this.realName}`;
  }

  constructor(
    public age: number,
    public name: string,
    public realName: string
  ) {}
}

export default Mutant;
