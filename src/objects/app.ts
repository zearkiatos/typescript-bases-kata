type Auto = {
  bodywork: string,
  model: string,
  bulletproof: boolean,
  passengers: number,
  shoot?: () => void
};

type Villan = {
  name: string,
  age: number | undefined,
  mutant: boolean
};

type Charles = {
  power: string,
  height: number
};

type Apocalypsis = {
  leader: boolean,
  members: string[]
}

type Mystique = Charles | Apocalypsis

export {
  Auto,
  Villan,
  Charles,
  Apocalypsis,
  Mystique
}
