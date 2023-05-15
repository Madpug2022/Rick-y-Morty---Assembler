var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchLocationData } from './fetchLocationData.js';
export function fillLocationNavBar() {
    return __awaiter(this, void 0, void 0, function* () {
        const locationNavBar = document.querySelector("#navLocationContainer");
        const locarionResidentsContainer = document.querySelector("#locarionResidentsContainer");
        let dataNumber = 0;
        const fetchPromises = [];
        for (let i = 1; i < 8; i++) {
            fetchPromises.push(fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
                .then(response => response.json())
                .then(data => {
                data.results.forEach((location) => {
                    dataNumber++;
                    const button = document.createElement('button');
                    button.textContent = location.name;
                    button.setAttribute('type', "button");
                    button.setAttribute("data-id", dataNumber.toString());
                    button.addEventListener("click", (event) => __awaiter(this, void 0, void 0, function* () {
                        cleanResidents();
                        const target = event.currentTarget;
                        const id = target.getAttribute("data-id");
                        console.log(id);
                        if (id) {
                            const location = yield fetchLocationData(id);
                            const locationName = document.querySelector("#locationName");
                            locationName.innerText = location.name;
                            const locationDataText = document.querySelector("#locationDataText");
                            locationDataText.innerText = `${location.type} | ${location.dimension}`;
                            const locarionResidentsText = document.querySelector("#locarionResidentsText");
                            locarionResidentsText.innerText = "Location Residents: ";
                            const residentsCards = location.residents;
                            const residentFetchPromises = [];
                            residentsCards.forEach((resident) => {
                                residentFetchPromises.push(fetch(resident)
                                    .then(response => response.json())
                                    .then(data => {
                                    const residentCard = document.createElement('div');
                                    residentCard.classList.add('card');
                                    residentCard.classList.add('m-1');
                                    residentCard.setAttribute('style', 'width: 10rem;');
                                    residentCard.setAttribute('id', 'residentCards');
                                    locarionResidentsContainer === null || locarionResidentsContainer === void 0 ? void 0 : locarionResidentsContainer.appendChild(residentCard);
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
                                }));
                            });
                            return Promise.all(residentFetchPromises);
                        }
                    }));
                    locationNavBar.appendChild(button);
                });
            }));
        }
        yield Promise.all(fetchPromises);
    });
}
function cleanResidents() {
    const residentCards = document.querySelectorAll("#residentCards");
    residentCards.forEach((resident) => { resident.remove(); });
}
//# sourceMappingURL=fillLocationNavBar.js.map