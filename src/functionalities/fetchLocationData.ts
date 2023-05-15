import { Location, LocationType } from '../types/location.js'
export async function fetchLocationData(id: string): Promise<Location>{
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
        const data = await response.json();
        const { name , type , dimension , residents } = data;

        const location: Location = {
            name,
            type: type as LocationType,
            dimension,
            residents
        };
        return location;
    } catch (error) {
        console.error('Error fetching character:', error);
        throw error;
    }
}
