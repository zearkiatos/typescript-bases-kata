type Avenger = {
    name: string,
    weapon: string
};

const ironMan: Avenger = {
    name: 'Iron Man',
    weapon: 'Armor suit'
};

const captainAmerica: Avenger = {
    name: 'Captain America',
    weapon: 'Shild'
};

const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
};

const avengers: Avenger[] = [ironMan, captainAmerica, thor];


export {
    avengers
}