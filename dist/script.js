import { setupSeasonButtons } from "./functionalities/season-btns.js";
import { loadSeasonBtns } from "./functionalities/season-btn-load.js";
import { setEventsToTopNavButtons } from "./functionalities/top-nav-btns.js";
window.onload = function () {
    setupSeasonButtons();
    loadSeasonBtns();
    setEventsToTopNavButtons();
};
//# sourceMappingURL=script.js.map