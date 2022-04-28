class AvengerShort {
  static averageAge: number = 35;

  constructor(
    private name: string,
    private team: string,
    public realName?: string
  ) {}
}

export default AvengerShort;
