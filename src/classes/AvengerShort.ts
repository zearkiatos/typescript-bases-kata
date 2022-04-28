class AvengerShort {
  static averageAge: number = 35;

  constructor(
    private name: string,
    private team: string,
    public realName?: string
  ) {}

  public bio(): string {
    return `${this.name} (${this.team})`;
  }

  private _bio(): string {
    return `${this.name} (${this.team})`;
  }

  static getAverageAge(): number {
    return AvengerShort.averageAge;
  }
}

export default AvengerShort;
