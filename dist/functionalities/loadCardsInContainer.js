var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//This function loads the cards of the characters when you click in one episode in the episode section
//is imported into season-btn-load
export function loadMain(i) {
    const mainCharacterBoard = document.querySelector("#mainCharacterBoard");
    const url = `https://rickandmortyapi.com/api/episode/${i}`;
    let dataOrder = 0;
    getCharacters(url)
        .then(characters => {
        const characterFetchPromises = characters.map(character => fetch(character).then(response => response.json()));
        return Promise.all(characterFetchPromises);
    })
        .then(dataArray => {
        dataArray.forEach(data => {
            const characterCard = document.createElement("div");
            characterCard.classList.add("card");
            characterCard.classList.add("m-1");
            characterCard.style.width = "10rem";
            characterCard.style.cursor = "pointer";
            characterCard.setAttribute("id", "characterCards");
            characterCard.setAttribute("data-bs-toggle", "modal");
            characterCard.setAttribute("data-bs-target", "#characterModal");
            characterCard.setAttribute("data-character", dataOrder.toString());
            dataOrder++;
            characterCard.addEventListener("click", (event) => {
                const mEpisodeElement = document.querySelectorAll("#mEpisodeElement");
                mEpisodeElement.forEach((element) => element.remove());
                const target = event.currentTarget;
                const id = target.getAttribute("data-character");
                if (id) {
                    const targetCharacter = dataArray[+id];
                    const targetLocation = targetCharacter.location.url;
                    const targetLocationNumber = targetLocation.replace(/\D/g, "");
                    const mCharacterImg = document.querySelector("#mCharacterImg");
                    const mCharacterName = document.querySelector("#mCharacterName");
                    const mCharacterStatus = document.querySelector("#mCharacterStatus");
                    const mCharacterSpecie = document.querySelector("#mCharacterSpecie");
                    const mCharacterGenre = document.querySelector("#mCharacterGenre");
                    const mCharacterOrigin = document.querySelector("#mCharacterOrigin");
                    const mEpisodesList = document.querySelector("#mEpisodesList");
                    const mLocationBtn = document.querySelector("#mLocationBtn");
                    //Character Episode Location
                    mLocationBtn.addEventListener("click", () => {
                        console.log(targetLocationNumber);
                        const episodeView = document.querySelector("#episodeView");
                        const episodesNavBar = document.querySelector("#episodesNavBar");
                        const characterView = document.querySelector("#characterView");
                        const charactersNavBar = document.querySelector("#charactersNavBar");
                        const locationView = document.querySelector("#locationView");
                        const locationNavBar = document.querySelector("#locationNavBar");
                        if (episodeView &&
                            episodesNavBar &&
                            characterView &&
                            charactersNavBar &&
                            locationView &&
                            locationNavBar) {
                            episodeView.setAttribute("style", "display: none");
                            episodesNavBar.setAttribute("style", "display: none");
                            characterView.setAttribute("style", "display: none");
                            charactersNavBar.setAttribute("style", "display: none");
                            locationView.setAttribute("style", "");
                            locationNavBar.setAttribute("style", "");
                        }
                        const selectedLocation = document.querySelector(`[data-id="${targetLocationNumber}"]`);
                        if (selectedLocation) {
                            selectedLocation.click();
                        }
                    });
                    // Character Data
                    mCharacterImg === null || mCharacterImg === void 0 ? void 0 : mCharacterImg.setAttribute("src", targetCharacter.image);
                    mCharacterName.innerText = targetCharacter.name;
                    mCharacterStatus.innerText = targetCharacter.status;
                    mCharacterSpecie.innerText = targetCharacter.species;
                    mCharacterGenre.innerText = targetCharacter.gender;
                    mCharacterOrigin.innerText = targetCharacter.origin.name;
                    // Character Episode Button
                    const episodeList = targetCharacter.episode;
                    episodeList.forEach((episode) => {
                        const episodeNumber = episode.replace(/\D/g, "");
                        const episodeEleCol = document.createElement("div");
                        episodeEleCol.setAttribute("class", "col-6 col-md-4 col-lg-3 m-1");
                        episodeEleCol.setAttribute("id", "mEpisodeElement");
                        mEpisodesList.appendChild(episodeEleCol);
                        const episodeEle = document.createElement("button");
                        episodeEle.classList.add("custom-btn2");
                        episodeEle.classList.add("btn-sm");
                        episodeEle.innerText = `Episode ${episodeNumber}`;
                        episodeEle.addEventListener("click", () => {
                            var _a;
                            (_a = document.getElementById(`episode${episodeNumber}`)) === null || _a === void 0 ? void 0 : _a.click();
                            const episodeView = document.querySelector("#episodeView");
                            const episodesNavBar = document.querySelector("#episodesNavBar");
                            const characterView = document.querySelector("#characterView");
                            const charactersNavBar = document.querySelector("#charactersNavBar");
                            const locationView = document.querySelector("#locationView");
                            const locationNavBar = document.querySelector("#locationNavBar");
                            if (episodeView &&
                                episodesNavBar &&
                                characterView &&
                                charactersNavBar &&
                                locationView &&
                                locationNavBar) {
                                episodeView.setAttribute("style", '');
                                episodesNavBar.setAttribute("style", '');
                                characterView.setAttribute("style", "display: none");
                                charactersNavBar.setAttribute("style", "display: none");
                                locationView.setAttribute("style", "display: none");
                                locationNavBar.setAttribute("style", "display: none");
                            }
                        });
                        episodeEleCol.appendChild(episodeEle);
                    });
                }
            });
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
//# sourceMappingURL=loadCardsInContainer.js.map