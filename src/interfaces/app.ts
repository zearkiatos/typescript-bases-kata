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

export {
    Auto,
    Villain,
    City
}