//This function prevents the opening of two simultaneous seasons in the episode section
//is imported into the final script
declare var bootstrap: any;

export function setupSeasonButtons() {

    const seasonBtns = document.querySelectorAll('.season-btn');
    seasonBtns.forEach((btn: Element) => {
        btn.addEventListener('click', () => {
            seasonBtns.forEach((otherBtn: Element) => {
                if (otherBtn !== btn) {
                    const target = otherBtn.getAttribute('data-bs-target');
                    const collapse = new bootstrap.Collapse(document.querySelector(target!), { toggle: false });
                    collapse.hide();
                }
            });
        });
    });
}
