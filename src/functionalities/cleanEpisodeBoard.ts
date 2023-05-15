export function cleanEpisodeBoard(): void {
    const episodeElements = document.querySelectorAll("#episodeElement");
    episodeElements.forEach((element) => {element.remove()})
}
