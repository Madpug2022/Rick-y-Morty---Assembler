//Thsi functions removes the welcoming modal from the index, as it will not be necesary anymore.
//is imported into final script
declare var bootstrap: any;

export function understood(){
    const myModalElement = document.querySelector("#staticBackdrop");
    const understoodBtn = document.querySelector('#understoodBtn');
    const body = document.querySelector('body');

    understoodBtn?.addEventListener("click", () =>{
        if (myModalElement) {
            const myModal = bootstrap.Modal.getInstance(myModalElement);
            if (myModal) {
              myModal.hide();
            }
        }
        myModalElement?.remove();
        body?.setAttribute("class", "");
        body?.setAttribute("style", "");
    })
};
