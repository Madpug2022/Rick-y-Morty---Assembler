//This function is used to fetch the data of a defined character, it receives the id of if and gets all corresponding data
//is imported in fillCharacterNavBar
import { Character, CharacterStatus, CharacterSpecies, CharacterGender } from '../types/characters.js'

export async function fetchCharacter(id: string): Promise<Character> {
    try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();

    const { name, status, species, gender, origin, image, episode } = data;

    const character: Character = {
        name,
        status: status as CharacterStatus,
        species: species as CharacterSpecies,
        gender: gender as CharacterGender,
        origin: origin.name,
        image: image,
        episode: episode
    };

    return character;
    } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
    }
}
