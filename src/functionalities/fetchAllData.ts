import { Character, Location, Episode } from '../types/allData.js'
export async function fetchAllData(){
    const pagesToFetch = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/location',
    'https://rickandmortyapi.com/api/episode'
    ];
    const allData: (Character | Location | Episode)[]= [];
    for (const page of pagesToFetch) {
        let nextPage = page;

        while (nextPage) {
            const response = await fetch(nextPage);
            const data = await response.json();

            if (data.results) {
                allData.push(...data.results);
            }

            nextPage = data.info.next;
        }
    }
    return allData;
}
