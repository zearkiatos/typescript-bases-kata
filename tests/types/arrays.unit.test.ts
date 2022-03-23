describe("Unit test for array types", () => {
  test("Should create a number array with types numerics and strings", () => {
    const numbers = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];

    expect(typeof numbers[1]).toBe("number");
    expect(typeof numbers[5]).toBe("string");
  });

  test("Should create a number array with types numerics, strings and boolean", () => {
    const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];

    numbers.push(true)

    expect(typeof numbers[1]).toBe("number");
    expect(typeof numbers[5]).toBe("string");
  });

  test("Should create infer string array and call a string function", () => {
    const villians = ['Omega Red', 'Dormammu', 'Green Elf'];
    const expectResult:string = 'DORMAMMU';
    const consoleSpy = jest.spyOn(console, 'log');

    villians.forEach(villian => console.log(villian.toUpperCase()));

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toBeCalledTimes(3);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, expectResult);
  });


});
