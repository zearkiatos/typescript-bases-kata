class Avenger {
  private name: string;
  private team: string;
  public realName?: string;
  static averageAge: number = 35;

  constructor(name: string, team: string, realName?: string) {
    this.name = name;
    this.team = team;
    this.realName = realName;
  }
}

export default Avenger;
