class Apocalypsis {
  static instance: Apocalypsis;
  private constructor(public name: string) {}

  static getInstance(name: string): Apocalypsis {
    if (!Apocalypsis.instance) {
      Apocalypsis.instance = new Apocalypsis(name);
    }
    return Apocalypsis.instance;
  }

  changeName(name: string): void {
    this.name = name;
  }
}

export { Apocalypsis };
