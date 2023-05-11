var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearBoard } from "./clearBoard.js";
export function loadSeasonBtns() {
    const seasonContents = [
        document.querySelector('#season1Content'),
        document.querySelector('#season2Content'),
        document.querySelector('#season3Content'),
        document.querySelector('#season4Content'),
        document.querySelector('#season5Content')
    ];
    for (let i = 0; i < seasonContents.length; i++) {
        const seasonContent = seasonContents[i];
        for (let j = i * 10 + 1; j <= i * 10 + 10; j++) {
            fetch(`https://rickandmortyapi.com/api/episode/${j}`)
                .then(response => response.json())
                .then(data => {
                const episode = document.createElement("button");
                episode.classList.add("episode-btn");
                episode.textContent = data.name;
                episode.addEventListener("click", () => {
                    clearBoard();
                    const episodeName = document.querySelector("#episodeName");
                    const episodeInfo = document.querySelector("#episodeInfo");
                    episodeName.textContent = `Episode ${data.id}`;
                    episodeInfo.textContent = `${data.episode} | ${data.air_date}`;
                    loadMain(j);
                });
                seasonContent.appendChild(episode);
            });
        }
    }
}
function loadMain(i) {
    const mainCharacterBoard = document.querySelector("#mainCharacterBoard");
    const url = `https://rickandmortyapi.com/api/episode/${i}`;
    getCharacters(url)
        .then(characters => {
        characters.forEach(character => {
            fetch(character)
                .then(response => response.json())
                .then(data => {
                const characterCard = document.createElement("div");
                characterCard.classList.add("card");
                characterCard.classList.add("m-1");
                characterCard.style.width = "10rem";
                characterCard.setAttribute("id", "characterCards");
                mainCharacterBoard.appendChild(characterCard);
                const characterImg = document.createElement("img");
                characterImg.setAttribute("src", data.image);
                characterImg.classList.add("card-img-top");
                characterCard.appendChild(characterImg);
                const cardBody = document.createElement("div");
                cardBody.setAttribute("id", "cardBody");
                characterCard.appendChild(cardBody);
                const name = document.createElement("p");
                name.classList.add("card-text");
                name.innerText = `Name: ${data.name}`;
                cardBody.appendChild(name);
                const status = document.createElement("p");
                status.classList.add("card-text");
                status.innerText = `Status: ${data.status}`;
                cardBody.appendChild(status);
                const specie = document.createElement("p");
                specie.classList.add("card-text");
                specie.innerText = `Specie: ${data.species}`;
                cardBody.appendChild(specie);
            });
        });
    });
}
function getCharacters(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            const result = data.characters;
            return result;
        }
        catch (error) {
            console.error("Error:", error);
            throw error;
        }
    });
}
//# sourceMappingURL=season-btn-load.js.map