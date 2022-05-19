interface Auto {
  on: boolean;
  maximanVelocity: number;
  speedUp: () => void;
}

interface Villain {
  laugh: boolean;
  eat: boolean;
  cry: boolean;
}

interface City {
  (citizens: string[]): number;
}

enum Genre {
  MALE = "Male",
  FAMALE = "Famale",
}

enum CivilStatus {
  SINGLE = "Single",
  MARRIED = "Married",
  WIDOWER = "Widower",
}

interface PersonalData {
  name: string;
  age: number;
  genre: Genre;
  civilStatus: CivilStatus;
  bio(): void;
}

class Person implements PersonalData {
  constructor(
    public name: string,
    public age: number,
    public genre: Genre,
    public civilStatus: CivilStatus
  ) {}
  bio(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Genre: ${this.genre}, Civil Status: ${this.civilStatus}`
    );
  }
}

export { Auto, Villain, City, Genre, CivilStatus, Person };
