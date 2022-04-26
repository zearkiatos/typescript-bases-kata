const avengers = {
    nick: 'Samuel L. Jackson',
    ironMan: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    actived: true,
    power: 1500
};

type Avengers = {
    nick: string,
    ironMan: string,
    vision: string,
    actived: boolean,
    power: number
};

const printAvenger = (avengers:Avengers):void => {
    console.log(avengers.vision);
};

const printRestAvengers = ({ ironMan, ...rest }:Avengers):void => {
    console.log(ironMan, rest);
};

const avengersArray:string[] = ['American Captain', 'Iron Man', 'Hulk'];

export {
    avengers,
    printAvenger,
    printRestAvengers,
    avengersArray
}