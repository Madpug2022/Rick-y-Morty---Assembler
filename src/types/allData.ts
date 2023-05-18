export interface Character {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    image: string;
}

export interface Location {
    name: string;
    type: string;
    dimension: string;
    residents: [];
}

export interface Episode {
    name: string;
    air_date: string;
    episode: string;
}
