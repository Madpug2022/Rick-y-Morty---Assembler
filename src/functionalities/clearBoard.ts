//This function is used to clean the characters card in the episode list
//is imported in season-btn-load


export function clearBoard() {
    const cards = document.querySelectorAll("#characterCards")
    cards.forEach(card => {
        card.remove();
    })
}
