export interface Character {
    name: string;
    status: CharacterStatus;
    species: CharacterSpecies;
    gender: CharacterGender;
    origin: string;
    image: string;
    episode: []
}

export enum CharacterStatus {
    Alive = 'alive',
    Dead = 'dead',
    Unknown = 'unknown',
}

export enum CharacterSpecies {
    Human = 'Human',
    Alien = 'Alien',
    Unknown = 'unknown',
}

export enum CharacterGender {
    Male = 'Male',
    Female = 'Female',
    Genderless = 'Genderless',
    Unknown = 'unknown',
}
