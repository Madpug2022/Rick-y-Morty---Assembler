export function loadMain(i: number) {
    const mainCharacterBoard = document.querySelector("#mainCharacterBoard");
    const url: string = `https://rickandmortyapi.com/api/episode/${i}`;
    let dataOrder = 0;
    getCharacters(url)
    .then(characters => {
        const characterFetchPromises = characters.map(character =>
        fetch(character).then(response => response.json())
        );

        return Promise.all(characterFetchPromises);
    })
    .then(dataArray => {
        dataArray.forEach(data => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("card");
        characterCard.classList.add("m-1");
        characterCard.style.width = "10rem";
        characterCard.setAttribute("id", "characterCards");
        characterCard.setAttribute("data-bs-toggle", "modal");
        characterCard.setAttribute("data-bs-target", "#characterModal");
        characterCard.setAttribute("data-character", dataOrder.toString());
        dataOrder++;
        characterCard.addEventListener("click", (event: MouseEvent) => {
            const mEpisodeElement = document.querySelectorAll("#mEpisodeElement");
            mEpisodeElement.forEach((element) => element.remove());
            const target = event.currentTarget as HTMLElement;
            const id = target.getAttribute("data-character");
            if(id){
                const targetCharacter = dataArray[+id];
                const targetLocation = targetCharacter.location.url;
                const targetLocationNumber = targetLocation.replace(/\D/g, "");
                const mCharacterImg = document.querySelector("#mCharacterImg");
                const mCharacterName = document.querySelector("#mCharacterName") as HTMLElement;
                const mCharacterStatus = document.querySelector("#mCharacterStatus") as HTMLElement;
                const mCharacterSpecie = document.querySelector("#mCharacterSpecie") as HTMLElement;
                const mCharacterGenre = document.querySelector("#mCharacterGenre") as HTMLElement;
                const mCharacterOrigin = document.querySelector("#mCharacterOrigin") as HTMLElement;
                const mEpisodesList = document.querySelector("#mEpisodesList") as HTMLElement;
                const mLocationBtn = document.querySelector("#mLocationBtn") as HTMLButtonElement;
//Character Episode Location
                mLocationBtn.addEventListener("click", () => {
                    console.log(targetLocationNumber)
                    const episodeView: HTMLElement | null = document.querySelector("#episodeView");
                        const episodesNavBar: HTMLElement | null = document.querySelector("#episodesNavBar");

                        const characterView: HTMLElement | null = document.querySelector("#characterView");
                        const charactersNavBar: HTMLElement | null = document.querySelector("#charactersNavBar");

                        const locationView: HTMLElement | null = document.querySelector("#locationView");
                        const locationNavBar: HTMLElement | null = document.querySelector("#locationNavBar");
                        if (
                            episodeView &&
                            episodesNavBar &&
                            characterView &&
                            charactersNavBar &&
                            locationView &&
                            locationNavBar
                            ) {
                        episodeView.setAttribute("style", "display: none");
                        episodesNavBar.setAttribute("style", "display: none");

                        characterView.setAttribute("style", "display: none");
                        charactersNavBar.setAttribute("style", "display: none");

                        locationView.setAttribute("style", "");
                        locationNavBar.setAttribute("style", "");
                    }

                    const selectedLocation = document.querySelector(`[data-id="${targetLocationNumber}"]`) as HTMLElement;
                    if (selectedLocation) {
                        selectedLocation.click();
                    }

                });
// Character Data
                mCharacterImg?.setAttribute("src", targetCharacter.image);
                mCharacterName.innerText = targetCharacter.name;
                mCharacterStatus.innerText = targetCharacter.status;
                mCharacterSpecie.innerText = targetCharacter.species;
                mCharacterGenre.innerText = targetCharacter.gender;
                mCharacterOrigin.innerText = targetCharacter.origin.name;
// Character Episode Button
                const episodeList = targetCharacter.episode;
                episodeList.forEach((episode: string) => {
                    const episodeNumber: string = episode.replace(/\D/g, "");
                    const episodeEleCol = document.createElement("div");
                    episodeEleCol.setAttribute("class", "col-6 col-md-4 col-lg-3 m-1");
                    episodeEleCol.setAttribute("id", "mEpisodeElement");
                    mEpisodesList.appendChild(episodeEleCol);

                    const episodeEle = document.createElement("button");
                    episodeEle.classList.add("custom-btn2");
                    episodeEle.classList.add("btn-sm");
                    episodeEle.innerText = `Episode ${episodeNumber}`;
                    episodeEle.addEventListener("click", () =>{
                        document.getElementById(`episode${episodeNumber}`)?.click();
                        const episodeView: HTMLElement | null = document.querySelector("#episodeView");
                        const episodesNavBar: HTMLElement | null = document.querySelector("#episodesNavBar");

                        const characterView: HTMLElement | null = document.querySelector("#characterView");
                        const charactersNavBar: HTMLElement | null = document.querySelector("#charactersNavBar");

                        const locationView: HTMLElement | null = document.querySelector("#locationView");
                        const locationNavBar: HTMLElement | null = document.querySelector("#locationNavBar");
                        if (
                            episodeView &&
                            episodesNavBar &&
                            characterView &&
                            charactersNavBar &&
                            locationView &&
                            locationNavBar
                            ) {
                        episodeView.setAttribute("style", '');
                        episodesNavBar.setAttribute("style", '');

                        characterView.setAttribute("style", "display: none");
                        charactersNavBar.setAttribute("style", "display: none");

                        locationView.setAttribute("style", "display: none");
                        locationNavBar.setAttribute("style", "display: none");
                    }
                    });

                    episodeEleCol.appendChild(episodeEle);
                })
            }
        })

        mainCharacterBoard!.appendChild(characterCard);

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
async function getCharacters(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const result: string[] = data.characters;
        return result;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
