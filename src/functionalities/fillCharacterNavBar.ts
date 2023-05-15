import { cleanEpisodeBoard } from './cleanEpisodeBoard.js';
import { Character, CharacterStatus, CharacterSpecies, CharacterGender } from '../types/characters.js'
import { fetchCharacter } from './fetchCharacter.js';
export async function fillCharacterNavBar(): Promise<void> {
    const navCharactersContainer: HTMLButtonElement | null = document.querySelector("#navCharactersContainer");
    let dataNumber: number = 0;
    const fetchPromises: Promise<void>[] = [];

    for (let i = 1; i < 43; i++) {
      fetchPromises.push(
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
                const id = target.getAttribute("data-id");
                console.log(id);
                if (id) {
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
                  });
                }
              });

              navCharactersContainer!.appendChild(button);
            });
          })
      );
    }

    await Promise.all(fetchPromises);
  }
