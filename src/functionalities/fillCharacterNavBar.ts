export function fillCharacterNavBar(): void{
    const navCharactersContainer: HTMLButtonElement | null = document.querySelector("#navCharactersContainer");
    let dataNumber: number = 0;
    for (let i = 1; i < 43; i++){
    fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach((character: { name: string }) => {
                dataNumber++;
                const button = document.createElement("button");
                button.textContent = character.name;
                button.setAttribute("type", "button");
                button.setAttribute("data-id", dataNumber.toString());
                button?.addEventListener("click", async (event: MouseEvent) => {
                    cleanEpisodeBoard();
                    const target = event.currentTarget as HTMLElement;
                    const id = target.getAttribute("data-id")
                    console.log(id);
                    if(id){
                    const character = await fetchCharacter(id);
                    const characterImg = document.querySelector("#characterImg");
                    characterImg?.setAttribute("src", character.image);

                    const charName = document.querySelector("#charName") as HTMLElement;
                    charName.innerText = character.name;

                    const charStatus = document.querySelector("#charStatus") as HTMLElement;
                    charStatus.innerText = character.status;

                    const charSpecie = document.querySelector("#charSpecie") as HTMLElement;
                    charSpecie.innerText = character.species;

                    const charGender = document.querySelector("#charGender") as HTMLElement;
                    charGender.innerText = character.gender;

                    const charOrigin = document.querySelector("#charOrigin") as HTMLElement;
                    charOrigin.innerText = character.origin;

                    const episodeListContainer = document.querySelector("#episodeListContainer") as HTMLElement;
                    const episodes = character.episode;
                    episodes.forEach((element: string) => {
                        const episodeNumber: string = element.replace(/\D/g, "");
                        const episodeElement = document.createElement("p");
                        episodeElement.setAttribute("id", "episodeElement");
                        episodeElement.innerText = `Episode ${episodeNumber}`;
                        episodeListContainer.appendChild(episodeElement);
                    })

                    }
                })

                navCharactersContainer!.appendChild(button);
            })
        })
    }
}

interface Character {
    name: string;
    status: CharacterStatus;
    species: CharacterSpecies;
    gender: CharacterGender;
    origin: string;
    image: string;
    episode: []
}

enum CharacterStatus {
    Alive = 'alive',
    Dead = 'dead',
    Unknown = 'unknown',
}

enum CharacterSpecies {
    Human = 'Human',
    Alien = 'Alien',
    Unknown = 'unknown',
}

enum CharacterGender {
    Male = 'Male',
    Female = 'Female',
    Genderless = 'Genderless',
    Unknown = 'unknown',
}

async function fetchCharacter(id: string): Promise<Character> {
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

function cleanEpisodeBoard(){
    const episodeElements = document.querySelectorAll("#episodeElement");
    episodeElements.forEach((element) => {element.remove()})
}
