import { setupSeasonButtons } from "./functionalities/season-btns.js";
import { loadSeasonBtns } from "./functionalities/season-btn-load.js";
import { setEventsToTopNavButtons } from "./functionalities/top-nav-btns.js";
import { fillCharacterNavBar } from "./functionalities/fillCharacterNavBar.js";
window.onload = function () {
    setupSeasonButtons();
    loadSeasonBtns();
    setEventsToTopNavButtons();
    fillCharacterNavBar();
};
//# sourceMappingURL=script.js.map