() => {
  const numbers:(string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
  numbers.push("11");

  numbers.push(true);

  const villians = ['Omega Red', 'Dormammu', 'Green Elf'];

  villians.forEach(villian => console.log(villian.toUpperCase()));
};
