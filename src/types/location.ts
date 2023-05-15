export interface Location {
    name: string;
    type: LocationType;
    dimension: string;
    residents: [];
}

export enum LocationType {
    CitadelofRicks = "Citadel of Ricks",
    planet = "Planet",
    spaceStation = "Space Station",
    Microverse = "Microverse",
    TV = "TV",
    Resort = "Resort",
    FantasyTown = "Fantasy Town",
    Dream = "Dream",
    Dimension = "Dimension",
    Menagerie = "Menagerie",
    Game = "Game",
    Custom = "Custom",
    unknown = "Unknown"
}
