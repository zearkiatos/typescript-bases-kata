const sum = (a: number, b: number): number => a + b;

const count = (heroes: string[]): number => heroes.length;

const callToBatman = (call: boolean): void => {
  call && console.log("Batisignal activated");
};

const unifiedHero = (...persons: string[]): string => persons.join(", ");

const donDoNothing = (
  num: number,
  text: string,
  bool: boolean,
  arr: []
): void => {};

const donDoNothingEither = donDoNothing;

export {
  sum,
  count,
  callToBatman,
  unifiedHero,
  donDoNothing,
  donDoNothingEither,
};

