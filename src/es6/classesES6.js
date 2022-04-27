class Avenger {
    name;
    power;

    constructor(name = 'No Name', power = 0) {
        this.name = name;
        this.power = power;
    }
}

class FlyingAvenger extends Avenger {
    flying;

    constructor(name = 'No Name', power = 0) {
        super(name, power);
        this.flying = true;
    }
}

module.exports = {
    Avenger,
    FlyingAvenger
}