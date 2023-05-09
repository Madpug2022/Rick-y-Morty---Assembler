function setupSeasonButtons() {
    const seasonBtns = document.querySelectorAll('.season-btn');
    seasonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            seasonBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    const target = otherBtn.dataset.bsTarget;
                    const collapse = new bootstrap.Collapse(document.querySelector(target), { toggle: false });
                    collapse.hide();
                }
            });
        });
    });
  }

  export default setupSeasonButtons;
