

const buttonInformationCharacters = document.createElement('button');
const buttonInformationPlanets = document.createElement('button');
const buttonContainer = document.createElement('div');
const loader = document.createElement('div');
const selectContainer = document.createElement('div');
const select = document.createElement('select');
const selectText = document.createElement('div');
const title = document.createElement('h1');
title.className = 'title';
selectText.innerHTML = 'Select an episode: ';
selectText.style.color = 'aqua';
for (let i = 0; i < 6; i++) {
    const option = document.createElement('option');
    option.innerHTML = i + 1;
    if (i === 4) option.selected = true;
    select.append(option);
}
selectContainer.className = 'select-container';
buttonContainer.className = 'button-container';
loader.classList.add('loader');
loader.classList.add('hidden');
buttonInformationCharacters.className = 'button-info';
buttonInformationPlanets.className = 'button-info';
buttonInformationCharacters.innerHTML = 'Отримати інформацію про персонажів епізоду';
buttonInformationPlanets.innerHTML = 'Отримати список планет епізоду';
buttonContainer.append(buttonInformationCharacters);
buttonContainer.append(buttonInformationPlanets);
selectContainer.append(buttonContainer);
selectContainer.append(selectText);
selectContainer.append(select);
document.body.append(selectContainer);
document.body.append(loader);
document.body.append(title);


const BASE_URL = 'https://swapi.dev/api/';

function hiddenLoader(isHidden) {
    isHidden ? loader.classList.add('hidden') : loader.classList.remove('hidden');
}

function httpRequest(url) {
    return new Promise((resolve, reject) => {
        const request = fetch(url);
        request.then((res) => resolve(res.json()));
    })
}

async function createFlexbox(array, titleText, button, filmUrl = '') {
    if (document.getElementById('flexbox')) document.getElementById('flexbox').remove();
    title.innerHTML = '';
    const flexbox = document.createElement('div');
    flexbox.id = 'flexbox';
    let i = 0;
    if (button === buttonInformationCharacters) {
        while (i < array.length) {
            let character;
            await httpRequest(array[`${i}`]).then(res => character = res);
            const characterInfo = document.createElement('div');
            const photo = document.createElement('img');
            const gender = document.createElement('img');
            const information = document.createElement('span');
            characterInfo.className = 'info';
            gender.className = 'gender';
            photo.className = 'photo';
            photos.find(el => character.name === el.name)
                ? photo.src = photos.find(el => character.name === el.name).url
                : photo.src = 'images/empty-photo.png';
            gender.src = `images/${character.gender.replace('/', '')}.png`;
            information.innerHTML = `${character.name}<br>${character.birth_year}<br>`;
            characterInfo.append(photo, information, gender);
            flexbox.append(characterInfo);
            i++;
        }
    }
    if (button === buttonInformationPlanets) {
        while (i < array.length) {
            let planet;
            await httpRequest(array[`${i}`]).then(res => planet = res);
            const planetInfo = document.createElement('div');
            const information = document.createElement('span');
            planetInfo.className = 'info';
            information.innerHTML = `Name: ${planet.name}<br>Climate: ${planet.climate}<br>Diameter: ${planet.diameter}<br>Population: ${planet.population}`
            planetInfo.append(information);
            flexbox.append(planetInfo);
            i++;
        }
        const buttonPrev = document.createElement('button');
        const buttonNext = document.createElement('button');
        buttonNext.classList.add('next', 'next-prev', 'cursor-pointer');
        buttonNext.innerHTML = 'next-->';
        buttonPrev.classList.add('prev', 'next-prev', 'cursor-pointer');
        buttonPrev.innerHTML = '<--prev';
        const filmNumberInDB = +filmUrl.substr(filmUrl.length-2, 1);
        console.log(filmNumberInDB);
        if (filmNumberInDB === 1) {
            buttonPrev.disabled = true;
            buttonPrev.classList.add('cursor-not');
        }
        if (filmNumberInDB === 6) {
            buttonNext.disabled = true;
            buttonNext.classList.add('cursor-not');
        }
        flexbox.append(buttonPrev, buttonNext);
        buttonPrev.addEventListener('click', () => console.log('prev'))
        buttonNext.addEventListener('click', () => console.log('next'))
    }
    title.innerHTML = titleText;
    document.body.append(flexbox);

}

async function getFilm() {
    let episode = 0;
    let film;
    +select.value + 3 <= 6 ? episode = +select.value + 3 : episode = +select.value - 3;
    await httpRequest(BASE_URL + 'films/' + episode).then(res => film = res);
    console.log(film);
    return film;
}

buttonInformationCharacters.addEventListener('click', async function() {
    hiddenLoader(false);
    const film = await getFilm();
    await createFlexbox(film.characters, film.title, buttonInformationCharacters);
    hiddenLoader(true);
});

buttonInformationPlanets.addEventListener('click', async function() {
    hiddenLoader(false);
    const film = await getFilm();
    await createFlexbox(film.planets, film.title, buttonInformationPlanets, film.url);
    hiddenLoader(true);
})
