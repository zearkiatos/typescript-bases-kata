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

export {
    avengers,
    printAvenger,
    printRestAvengers
}