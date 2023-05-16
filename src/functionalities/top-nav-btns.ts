//this function gives functionalitie to the buttons in the top nav bar
export function setEventsToTopNavButtons(): void {
    // Button selection
    const topEpisodesBtn: HTMLButtonElement | null = document.querySelector("#topEpisodesBtn");
    const topCharactersBtn: HTMLButtonElement | null = document.querySelector("#topCharactersBtn");
    const topLocationBtn: HTMLButtonElement | null = document.querySelector("#topLocationBtn");

    // Sections Selection
    const episodeView: HTMLElement | null = document.querySelector("#episodeView");
    const episodesNavBar: HTMLElement | null = document.querySelector("#episodesNavBar");

    const characterView: HTMLElement | null = document.querySelector("#characterView");
    const charactersNavBar: HTMLElement | null = document.querySelector("#charactersNavBar");

    const locationView: HTMLElement | null = document.querySelector("#locationView");
    const locationNavBar: HTMLElement | null = document.querySelector("#locationNavBar");

    // Null checks
    if (
    topEpisodesBtn &&
    topCharactersBtn &&
    topLocationBtn &&
    episodeView &&
    episodesNavBar &&
    characterView &&
    charactersNavBar &&
    locationView &&
    locationNavBar
    ) {
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
