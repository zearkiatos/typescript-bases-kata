let flash = {
    name: 'Flash',
    age: 24,
    powers: ['Super velocity', 'Travel throught the time']
}

let heroe: { name: string, age: number, powers: string[], getName: () => string  } = {
    name: 'Flash',
    age: 24,
    powers: ['Super velocity', 'Travel throught the time'],
    getName(){
        return this.name;
    }
}

type Hero = {
    name: string,
    age?: number,
    powers: string[]
    getName?: () => string
};

export {
    flash,
    heroe,
    Hero
}