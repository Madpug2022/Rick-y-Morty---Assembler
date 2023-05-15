import { clearBoard } from "./clearBoard.js";
import { loadMain } from "./loadCardsInContainer.js";
export function loadSeasonBtns() {
    const seasonContents = [
        document.querySelector('#season1Content'),
        document.querySelector('#season2Content'),
        document.querySelector('#season3Content'),
        document.querySelector('#season4Content'),
        document.querySelector('#season5Content')
    ];
    const fetchPromises = [];
    seasonContents.forEach((seasonContent, index) => {
        const startEpisode = index * 10 + 1;
        const endEpisode = startEpisode + 9;
        for (let j = startEpisode; j <= endEpisode; j++) {
            fetchPromises.push(fetch(`https://rickandmortyapi.com/api/episode/${j}`)
                .then(response => response.json())
                .then(data => {
                const episode = document.createElement("button");
                episode.classList.add("episode-btn");
                episode.textContent = `Episode ${j}: ${data.name}`;
                episode.setAttribute("id", `episode${j}`);
                episode.addEventListener("click", () => {
                    clearBoard();
                    const episodeName = document.querySelector("#episodeName");
                    const episodeInfo = document.querySelector("#episodeInfo");
                    episodeName.textContent = `Episode ${data.id}`;
                    episodeInfo.textContent = `${data.episode} | ${data.air_date}`;
                    loadMain(j);
                });
                seasonContent.appendChild(episode);
            }));
        }
    });
    return Promise.all(fetchPromises);
}
//# sourceMappingURL=season-btn-load.js.map