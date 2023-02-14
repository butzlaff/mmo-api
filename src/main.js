import './style.css';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR CREDENCIAL HERE',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

const gamesList = document.querySelector('#games');

async function data() { 
    const aza = await fetch('https://mmo-games.p.rapidapi.com/games', options);
    const newDate = await aza.json();
    const datas = await newDate;
    return datas;
};

const createTitleGame = (title) => {
    const createTitle = document.createElement('h1') 
    createTitle.innerHTML = title.toUpperCase();
    gamesList.appendChild(createTitle);
}

const createImageGame = (thumbnail) => {
    const createImg = document.createElement('img');
    createImg.setAttribute('src', thumbnail)
    gamesList.appendChild(createImg);
}

const createDescGame = (description) => {
    const crateDescription = document.createElement('p')
    crateDescription.innerHTML = description;
    crateDescription.className = 'description'
    gamesList.appendChild(crateDescription);
}

const createDeveloperGame = (developer) => {
    const createDeveloper = document.createElement('p') 
    createDeveloper.innerHTML = `Desenvolvedor: ${developer}`;
    createDeveloper.className = 'developerClass'
    gamesList.appendChild(createDeveloper);
}

const createUrlGame = (gameUrl, title) => {
    const createUrl = document.createElement('a'); 
    createUrl.href = gameUrl;
    createUrl.innerHTML = title;
    gamesList.appendChild(createUrl);
}

async function loadPage() {
    const dataGame = await data();
    console.log(dataGame);
    dataGame.forEach(async (game) => {
        const { title, thumbnail, short_description, developer, game_url} = game;
        createTitleGame(title);
        createImageGame(thumbnail);
        createDescGame(short_description);
        createDeveloperGame(developer);
        createUrlGame(game_url, title);
    })
}

window.onload = () => {
    loadPage();
};
