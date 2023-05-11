export function setEventsToTopNavButtons() {
    // Button selection
    const topEpisodesBtn = document.querySelector("#topEpisodesBtn");
    const topCharactersBtn = document.querySelector("#topCharactersBtn");
    const topLocationBtn = document.querySelector("#topLocationBtn");
    // Sections Selection
    const episodeView = document.querySelector("#episodeView");
    const episodesNavBar = document.querySelector("#episodesNavBar");
    const characterView = document.querySelector("#characterView");
    const charactersNavBar = document.querySelector("#charactersNavBar");
    const locationView = document.querySelector("#locationView");
    const locationNavBar = document.querySelector("#locationNavBar");
    // Null checks
    if (topEpisodesBtn &&
        topCharactersBtn &&
        topLocationBtn &&
        episodeView &&
        episodesNavBar &&
        characterView &&
        charactersNavBar &&
        locationView &&
        locationNavBar) {
        // Event Listeners
        topEpisodesBtn.addEventListener("click", () => {
            episodeView.setAttribute("style", '');
            episodesNavBar.setAttribute("style", '');
            characterView.setAttribute("style", "display: none");
            charactersNavBar.setAttribute("style", "display: none");
            locationView.setAttribute("style", "display: none");
            locationNavBar.setAttribute("style", "display: none");
        });
        topCharactersBtn.addEventListener("click", () => {
            episodeView.setAttribute("style", "display: none");
            episodesNavBar.setAttribute("style", "display: none");
            characterView.setAttribute("style", '');
            charactersNavBar.setAttribute("style", '');
            locationView.setAttribute("style", "display: none");
            locationNavBar.setAttribute("style", "display: none");
        });
        topLocationBtn.addEventListener("click", () => {
            episodeView.setAttribute("style", "display: none");
            episodesNavBar.setAttribute("style", "display: none");
            characterView.setAttribute("style", "display: none");
            charactersNavBar.setAttribute("style", "display: none");
            locationView.setAttribute("style", '');
            locationNavBar.setAttribute("style", '');
        });
    }
}
//# sourceMappingURL=top-nav-btns.js.map