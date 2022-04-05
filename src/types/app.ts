(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const exist: boolean = false;

  // Tuplas
  const heroesPartner: [string, string] = [batman, superman];
  const villane: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const allies: string[] = ["Wonder Woman", "Aquaman", "San", "Flash"];

  //Enumeraciones
  enum SuperHeroPower {
    AQUAMAN = 0,
    BATMAN = 1,
    FLASH = 5,
    SUPERMAN = 100,
  }
  const flashPower = SuperHeroPower.FLASH;
  const supermanPower = SuperHeroPower.SUPERMAN;
  const batmanPower = SuperHeroPower.BATMAN;
  const aquamanPower = SuperHeroPower.AQUAMAN;

  // Retorno de funciones
  function activateBatSignal(): string {
    return "activated";
  }

  function bringHelp(): void {
    console.log("help!!!");
  }

  // Aserciones de Tipo
  const power: any = "100";
  const powerLength: number = (power as string).length;
  console.log(powerLength);
})();
