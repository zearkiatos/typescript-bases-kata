describe("Unit test for any types", () => {
  test("Should accept any data type", () => {
    let avenger: any = 123;
    avenger = "Dr. Stranger";
    const expectResult: string = "Dr. Stranger";

    expect(avenger).toBe(expectResult);
  });

  test("Should casting a data to string and access to strings functions", () => {
    const avenger:any = "Dr. Stranger";

    expect((avenger as string).charAt(0)).toBeDefined();
  });

  test("Should casting a data to number and access to numbers functions", () => {
    const value:any = 1.9238923;

    expect((<number>value).toFixed(2)).toBeDefined();
  });
});
