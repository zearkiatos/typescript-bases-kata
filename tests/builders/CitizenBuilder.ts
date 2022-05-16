import BaseBuilder from "./baseBuilder";

class CitizenBuilder extends BaseBuilder {
    firstName: string;
    middleName: string;
    lastName: string;
    constructor() {
        super();
        this.firstName = 'Pedro';
        this.middleName = 'Roberto';
        this.lastName = 'Capriles';
    }
}

export default CitizenBuilder;