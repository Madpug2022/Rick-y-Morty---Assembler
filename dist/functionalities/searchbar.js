var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchAllData } from './fetchAllData.js';
import { clearBoard } from './clearBoard.js';
export function setSearchBar() {
    const searchBarInput = document.querySelector("#searchBarInput");
    const searchButton = document.querySelector("#searchButton");
    const searchForm = document.querySelector("#searchForm");
    searchForm.addEventListener("submit", (event) => __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        clearBoard();
        //Selectors
        const termToSearch = searchBarInput.value.toLowerCase();
        const mainCharacterBoard = document.querySelector("#mainCharacterBoard");
        const allData = yield fetchAllData();
        const results = [];
        event.preventDefault();
        allData.forEach((data) => {
            const itemName = data.name.toLowerCase();
            if (itemName.includes(termToSearch)) {
                results.push(data);
            }
        });
        console.log(results);
        results.forEach((data) => {
            if ('species' in data) {
                const characterCard = document.createElement("div");
                characterCard.classList.add("card");
                characterCard.classList.add("m-1");
                characterCard.style.width = "10rem";
                characterCard.style.cursor = "pointer";
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
            }
            else if ('air_date' in data) {
                const episodeCard = document.createElement("div");
                episodeCard.classList.add("card");
                episodeCard.classList.add("m-1");
                episodeCard.style.width = "10rem";
                episodeCard.style.cursor = "pointer";
                episodeCard.setAttribute("id", "characterCards");
                mainCharacterBoard.appendChild(episodeCard);
                const episodeImg = document.createElement("img");
                episodeImg.setAttribute("src", "resources/episode-placeholder.jpg");
                episodeImg.classList.add("card-img-top");
                episodeCard.appendChild(episodeImg);
                const cardBody = document.createElement("div");
                cardBody.setAttribute("id", "cardBody");
                episodeCard.appendChild(cardBody);
                const name = document.createElement("p");
                name.classList.add("card-text");
                name.innerText = `Name: ${data.name}`;
                cardBody.appendChild(name);
                const airDate = document.createElement("p");
                airDate.classList.add("card-text");
                airDate.innerText = `Status: ${data.air_date}`;
                cardBody.appendChild(airDate);
                const episodes = document.createElement("p");
                episodes.classList.add("card-text");
                episodes.innerText = `Specie: ${data.episode}`;
                cardBody.appendChild(episodes);
            }
            else if ('dimension' in data) {
                const locationCard = document.createElement("div");
                locationCard.classList.add("card");
                locationCard.classList.add("m-1");
                locationCard.style.width = "10rem";
                locationCard.style.cursor = "pointer";
                locationCard.setAttribute("id", "characterCards");
                mainCharacterBoard.appendChild(locationCard);
                const locationCardImg = document.createElement("img");
                locationCardImg.setAttribute("src", "resources/planet-placeholder.jpg");
                locationCardImg.classList.add("card-img-top");
                locationCard.appendChild(locationCardImg);
                const cardBody = document.createElement("div");
                cardBody.setAttribute("id", "cardBody");
                locationCard.appendChild(cardBody);
                const name = document.createElement("p");
                name.classList.add("card-text");
                name.innerText = `Name: ${data.name}`;
                cardBody.appendChild(name);
                const types = document.createElement("p");
                types.classList.add("card-text");
                types.innerText = `Status: ${data.type}`;
                cardBody.appendChild(types);
                const dimesions = document.createElement("p");
                dimesions.classList.add("card-text");
                dimesions.innerText = `Specie: ${data.dimension}`;
                cardBody.appendChild(dimesions);
            }
        });
    }));
}
//# sourceMappingURL=searchbar.js.map