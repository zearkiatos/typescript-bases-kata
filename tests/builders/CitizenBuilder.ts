import BaseBuilder from "./baseBuilder";

class CitizenBuilder extends BaseBuilder {
  firstName: string;
  middleName: string;
  lastName: string;
  constructor() {
    super();
    this.firstName = "Pedro";
    this.middleName = "Roberto";
    this.lastName = "Capriles";
  }

  withFirstName(firstName: string): CitizenBuilder {
    this.firstName = firstName;
    return this;
  }

  withMiddleName(middleName: string): CitizenBuilder {
    this.middleName = middleName;
    return this;
  }

  withLastName(lastName: string) {
    this.lastName = lastName;
    return this;
  }
}

export default CitizenBuilder;
