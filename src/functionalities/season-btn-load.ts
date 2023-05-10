export function loadSeasonBtns(){
    const season1Content = document.querySelector('#season1Content');
    const season2Content = document.querySelector('#season2Content');
    const season3Content = document.querySelector('#season3Content');
    const season4Content = document.querySelector('#season4Content');
    const season5Content = document.querySelector('#season5Content');

    for (let i = 1; i <= 11; i++){
        fetch(`https://rickandmortyapi.com/api/episode/${i}`)
            .then(response => response.json())
            .then(data => {
                const episode = document.createElement("button");
                episode.classList.add("episode-btn");
                episode.textContent = data.name;

                season1Content!.appendChild(episode);
            })
    };
    for (let i = 12; i <= 21; i++){
        fetch(`https://rickandmortyapi.com/api/episode/${i}`)
            .then(response => response.json())
            .then(data => {
                const episode = document.createElement("button");
                episode.classList.add("episode-btn");
                episode.textContent = data.name;

                season2Content!.appendChild(episode);
            })
    };
    for (let i = 21; i <= 31; i++){
        fetch(`https://rickandmortyapi.com/api/episode/${i}`)
            .then(response => response.json())
            .then(data => {
                const episode = document.createElement("button");
                episode.classList.add("episode-btn");
                episode.textContent = data.name;

                season3Content!.appendChild(episode);
            })
    };
    for (let i = 31; i <= 41; i++){
        fetch(`https://rickandmortyapi.com/api/episode/${i}`)
            .then(response => response.json())
            .then(data => {
                const episode = document.createElement("button");
                episode.classList.add("episode-btn");
                episode.textContent = data.name;

                season4Content!.appendChild(episode);
            })
    };
    for (let i = 41; i <= 51; i++){
        fetch(`https://rickandmortyapi.com/api/episode/${i}`)
            .then(response => response.json())
            .then(data => {
                const episode = document.createElement("button");
                episode.classList.add("episode-btn");
                episode.textContent = data.name;

                season5Content!.appendChild(episode);
            })
    };
}
