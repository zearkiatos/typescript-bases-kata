class Avenger {
  constructor(public name: string, public realName: string) {
    console.log("Build an Avenger");
  }

  protected getFullname() {
    return `${this.name} ${this.realName}`;
  }
}

class Xmen extends Avenger {
  constructor(name: string, realName: string, public isMutant: boolean) {
    super(name, realName);
    console.log("Build an Xmen");
  }

  getFullNameFromXmen() {
    console.log(this.getFullname());
  }
}

export { Avenger, Xmen };
