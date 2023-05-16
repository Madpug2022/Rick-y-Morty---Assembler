export function understood() {
    const myModalElement = document.querySelector("#staticBackdrop");
    const understoodBtn = document.querySelector('#understoodBtn');
    const body = document.querySelector('body');
    understoodBtn === null || understoodBtn === void 0 ? void 0 : understoodBtn.addEventListener("click", () => {
        if (myModalElement) {
            const myModal = bootstrap.Modal.getInstance(myModalElement);
            if (myModal) {
                myModal.hide();
            }
        }
        myModalElement === null || myModalElement === void 0 ? void 0 : myModalElement.remove();
        body === null || body === void 0 ? void 0 : body.setAttribute("class", "");
        body === null || body === void 0 ? void 0 : body.setAttribute("style", "");
    });
}
;
//# sourceMappingURL=goodbye.js.map