//This function opens the welcoming modal
declare var bootstrap: any;
export function openModal() {
    const myModal = bootstrap.Modal.getOrCreateInstance('#staticBackdrop');
    myModal.show();
  }
