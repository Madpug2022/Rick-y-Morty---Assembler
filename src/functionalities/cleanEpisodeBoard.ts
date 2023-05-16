//This function is called for cleaning the episode list board in the location section
//is imported in fillCharacterNavBar.ts


export function cleanEpisodeBoard(): void {
    const episodeElements = document.querySelectorAll("#episodeElement");
    episodeElements.forEach((element) => {element.remove()})
}
