import { Avenger } from "./Extends";

class Xmen extends Avenger {
  constructor(name: string, realName: string, public isMutant: boolean) {
    super(name, realName);
    console.log("Build an Xmen");
  }

  get fullName() {
      return `${this.name} - ${this.realName}`;
  }

  set fullName(name: string) {
    if (name.length < 3)
        throw new Error('The name should be granter than 3');
    this.name = name;
  }

  getFullNameFromXmen() {
    console.log(this.getFullname());
  }
}

export default Xmen;
