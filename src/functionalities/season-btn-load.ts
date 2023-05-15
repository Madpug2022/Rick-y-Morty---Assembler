import { clearBoard } from "./clearBoard.js";
export function loadSeasonBtns() {
    const seasonContents = [
    document.querySelector('#season1Content'),
    document.querySelector('#season2Content'),
    document.querySelector('#season3Content'),
    document.querySelector('#season4Content'),
    document.querySelector('#season5Content')
    ];

    const fetchPromises: Promise<any>[] = [];

    seasonContents.forEach((seasonContent, index) => {
      const startEpisode = index * 10 + 1;
    const endEpisode = startEpisode + 9;

    for (let j = startEpisode; j <= endEpisode; j++) {
        fetchPromises.push(
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
                episodeName!.textContent = `Episode ${data.id}`;
                episodeInfo!.textContent = `${data.episode} | ${data.air_date}`;
                loadMain(j);
            });

            seasonContent!.appendChild(episode);
            })
        );
    }
    });

    return Promise.all(fetchPromises);
}
function loadMain(i: number){
    const mainCharacterBoard = document.querySelector("#mainCharacterBoard");
    const url: string = `https://rickandmortyapi.com/api/episode/${i}`
    getCharacters(url)
    .then(characters => {
        characters.forEach(character => {
            fetch(character)
            .then(response => response.json())
            .then (data => {
            const characterCard = document.createElement("div");
            characterCard.classList.add("card");
            characterCard.classList.add("m-1");
            characterCard.style.width = "10rem";
            characterCard.setAttribute("id", "characterCards")

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

        })
    })
    })
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
