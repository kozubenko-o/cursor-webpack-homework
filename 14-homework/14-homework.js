
const language = document.createElement('select');
const languageEnglish = document.createElement('option');
const languageWookiee = document.createElement('option');
const buttonInformationCharacters = document.createElement('button');
const buttonInformationPlanets = document.createElement('button');
const buttonContainer = document.createElement('div');
const loader = document.createElement('div');
const selectContainer = document.createElement('div');
const select = document.createElement('select');
const selectText = document.createElement('div');
const title = document.createElement('h1');
selectText.style.color = 'aqua';
for (let i = 0; i < 6; i++) {
    const option = document.createElement('option');
    option.innerHTML = i + 1;
    if (i === 4) option.selected = true;
    select.append(option);
}
selectContainer.className = 'select-container';
buttonContainer.className = 'button-container';
language.className = 'language';
title.className = 'title';
loader.classList.add('loader', 'hidden');
buttonInformationCharacters.className = 'button-info';
buttonInformationPlanets.className = 'button-info';
buttonInformationCharacters.innerHTML = 'Отримати інформацію про персонажів епізоду';
buttonInformationPlanets.innerHTML = 'Отримати список планет епізоду';
selectText.innerHTML = 'Selected an episode: ';
languageEnglish.innerHTML = 'English';
languageEnglish.selected = true;
languageWookiee.innerHTML = 'Wookiee';
language.append(languageEnglish, languageWookiee);
buttonContainer.append(buttonInformationCharacters, buttonInformationPlanets);
selectContainer.append(buttonContainer, selectText, select);
document.body.append(selectContainer, loader, title, language);


const BASE_URL = 'https://swapi.dev/api/';
let LANG_URL_PART = '';

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
        buttonNext.classList.add('next', 'button-info');
        buttonNext.innerHTML = 'next-->';
        buttonPrev.classList.add('prev', 'button-info');
        buttonPrev.innerHTML = '<--prev';
        const filmNumberInDB = +filmUrl.substr(filmUrl.length - 2, 1);
        console.log(filmNumberInDB);
        if (getEpisode(filmNumberInDB) === 1) {
            buttonPrev.disabled = true;
            buttonPrev.classList.add('cursor-not');
        }
        if (getEpisode(filmNumberInDB) === 6) {
            buttonNext.disabled = true;
            buttonNext.classList.add('cursor-not');
        }
        flexbox.append(buttonPrev, buttonNext);
        buttonPrev.addEventListener('click', async function () {
            hiddenLoader(false);
            let prevEpisode;
            filmNumberInDB === 1 ? prevEpisode = 6 : prevEpisode = filmNumberInDB - 1;
            select.options.item(getEpisode(prevEpisode) - 1).selected = true;
            await printPlanets(filmUrl.substr(0, filmUrl.length - 2) + prevEpisode);
            hiddenLoader(true);
        })
        buttonNext.addEventListener('click', async function () {
            hiddenLoader(false);
            let nextEpisode;
            filmNumberInDB === 6 ? nextEpisode = 1 : nextEpisode = filmNumberInDB + 1;
            select.options.item(getEpisode(nextEpisode) - 1).selected = true;
            await printPlanets(filmUrl.substr(0, filmUrl.length - 2) + nextEpisode);
            hiddenLoader(true);
        })
    }
    title.innerHTML = titleText;
    document.body.append(flexbox);

}
function getEpisode(numberEpisode) {
    return numberEpisode + 3 <= 6 ? numberEpisode + 3 : numberEpisode - 3;
}

async function getFilm(url) {
    let film;
    await httpRequest(url).then(res => film = res);
    return film;
}

async function printPlanets(url) {
    const film = await getFilm(url);
    await createFlexbox(film.planets, film.title, buttonInformationPlanets, film.url);
}

buttonInformationCharacters.addEventListener('click', async function() {
    hiddenLoader(false);
    const film = await getFilm(BASE_URL + 'films/' + getEpisode(+select.value));
    await createFlexbox(film.characters, film.title, buttonInformationCharacters);
    hiddenLoader(true);
});

buttonInformationPlanets.addEventListener('click', async function() {
    hiddenLoader(false);
    await printPlanets(BASE_URL + 'films/' + getEpisode(+select.value));
    hiddenLoader(true);
});

language.addEventListener('change', function() {
    language.value.toLowerCase() === 'wookiee' ? LANG_URL_PART = '?format=wookiee' : LANG_URL_PART = '';
});
