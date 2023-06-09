//This function fills the nav bar in the location section
//is imported into final script
import { fetchLocationData } from './fetchLocationData.js'
export async function fillLocationNavBar(): Promise<void> {
    const locationNavBar: HTMLButtonElement | null = document.querySelector("#navLocationContainer");
    const locarionResidentsContainer = document.querySelector("#locarionResidentsContainer");
    let dataNumber: number = 0;
    const fetchPromises: Promise<any>[] = [];

    for (let i = 1; i < 8; i++) {
    fetchPromises.push(
        fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach((location: { name: string }) => {
            dataNumber++;
            const button = document.createElement('button');
            button.textContent = location.name;
            button.setAttribute('type', "button");
            button.setAttribute("data-id", dataNumber.toString());
            button.addEventListener("click", async (event: MouseEvent) => {
                cleanResidents();
                const target = event.currentTarget as HTMLElement;
                const id = target.getAttribute("data-id");
                console.log(id);
                if (id) {
                const location = await fetchLocationData(id);
                const locationName = document.querySelector("#locationName") as HTMLElement;
                locationName.innerText = location.name;

                const locationDataText = document.querySelector("#locationDataText") as HTMLElement;
                locationDataText.innerText = `${location.type} | ${location.dimension}`;

                const locarionResidentsText = document.querySelector("#locarionResidentsText") as HTMLElement;
                locarionResidentsText.innerText = "Location Residents: "

                const residentsCards = location.residents;
                const residentFetchPromises: Promise<any>[] = [];

                residentsCards.forEach((resident) => {
                    residentFetchPromises.push(
                    fetch(resident)
                        .then(response => response.json())
                        .then(data => {
                        const residentCard = document.createElement('div');
                        residentCard.classList.add('card');
                        residentCard.classList.add('m-1');
                        residentCard.setAttribute('style', 'width: 10rem;');
                        residentCard.setAttribute('id', 'residentCards');
                        locarionResidentsContainer?.appendChild(residentCard);
                        const residentImg = document.createElement('img');
                        residentImg.setAttribute('src', data.image);
                        residentImg.classList.add("card-img-top");
                        residentCard.appendChild(residentImg);

                        const cardBody = document.createElement("div");
                    cardBody.setAttribute("id", "cardBody");

                        residentCard.appendChild(cardBody);

                        const name = document.createElement("p");
                        name.classList.add("card-text");
                        name.innerText = `Name: ${data.name}`;
                        cardBody.appendChild(name);
                        const status = document.createElement("p");
                        status.classList.add("card-text");
                        status.innerText = `Status: ${data.status}`;
                        cardBody.appendChild(status);
                        const specie = document.createElement("p");
                        specie.classList.add("card-text");
                        specie.innerText = `Specie: ${data.species}`;
                        cardBody.appendChild(specie);
                        })
                    );
                });

                return Promise.all(residentFetchPromises);
                }
            });

            locationNavBar!.appendChild(button);
            });
        })
    );
    }

    await Promise.all(fetchPromises);
}

function cleanResidents(){
    const residentCards = document.querySelectorAll("#residentCards");
    residentCards.forEach((resident) => {resident.remove()})
}
