var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//This function is used to fill the nav bar in the character section
//is imported into final script
import { cleanEpisodeBoard } from './cleanEpisodeBoard.js';
import { fetchCharacter } from './fetchCharacter.js';
export function fillCharacterNavBar() {
    return __awaiter(this, void 0, void 0, function* () {
        const navCharactersContainer = document.querySelector("#navCharactersContainer");
        let dataNumber = 0;
        const fetchPromises = [];
        for (let i = 1; i < 43; i++) {
            fetchPromises.push(fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
                .then(response => response.json())
                .then(data => {
                data.results.forEach((character) => {
                    dataNumber++;
                    const button = document.createElement("button");
                    button.textContent = character.name;
                    button.setAttribute("type", "button");
                    button.setAttribute("data-id", dataNumber.toString());
                    button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => __awaiter(this, void 0, void 0, function* () {
                        cleanEpisodeBoard();
                        const target = event.currentTarget;
                        const id = target.getAttribute("data-id");
                        console.log(id);
                        if (id) {
                            const character = yield fetchCharacter(id);
                            const characterImg = document.querySelector("#characterImg");
                            characterImg === null || characterImg === void 0 ? void 0 : characterImg.setAttribute("src", character.image);
                            const charName = document.querySelector("#charName");
                            charName.innerText = character.name;
                            const charStatus = document.querySelector("#charStatus");
                            charStatus.innerText = character.status;
                            const charSpecie = document.querySelector("#charSpecie");
                            charSpecie.innerText = character.species;
                            const charGender = document.querySelector("#charGender");
                            charGender.innerText = character.gender;
                            const charOrigin = document.querySelector("#charOrigin");
                            charOrigin.innerText = character.origin;
                            const episodeListContainer = document.querySelector("#episodeListContainer");
                            const episodes = character.episode;
                            episodes.forEach((element) => {
                                const episodeNumber = element.replace(/\D/g, "");
                                const episodeElement = document.createElement("p");
                                episodeElement.setAttribute("id", "episodeElement");
                                episodeElement.innerText = `Episode ${episodeNumber}`;
                                episodeListContainer.appendChild(episodeElement);
                            });
                        }
                    }));
                    navCharactersContainer.appendChild(button);
                });
            }));
        }
        yield Promise.all(fetchPromises);
    });
}
//# sourceMappingURL=fillCharacterNavBar.js.map