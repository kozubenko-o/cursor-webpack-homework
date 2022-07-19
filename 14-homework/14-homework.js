import {photos, langEn, langWk} from "./objects.js";

export const language = document.createElement('select');
const languageEnglish = document.createElement('option');
const languageWookiee = document.createElement('option');
export const buttonInformationCharacters = document.createElement('button');
export const buttonInformationPlanets = document.createElement('button');
const buttonContainer = document.createElement('div');
const loader = document.createElement('div');
const selectContainer = document.createElement('div');
export const select = document.createElement('select');
export const selectText = document.createElement('div');
const title = document.createElement('h1');
selectText.style.color = 'aqua';
selectText.style.fontSize = '30px';
selectText.style.fontFamily = 'monospace';
language.style.fontFamily = 'monospace';
select.style.fontSize = '25px';
select.style.width = '50px';
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


export const BASE_URL = 'https://swapi.dev/api/';
let lang = langEn;
let LANG_URL_PART = '';
let currentRequest;

export function hiddenLoader(isHidden) {
    isHidden ? loader.classList.add('hidden') : loader.classList.remove('hidden');
}

export function httpRequest(url) {
    return new Promise((resolve, reject) => {
        const request = fetch(url).catch(err => reject(err));
        request.then((res) => resolve(res.json()));
    })
}

async function createFlexbox(film, button) {
    if (!button) return;
    currentRequest = button;
    if (document.getElementById('flexbox')) document.getElementById('flexbox').remove();
    title.innerHTML = '';
    const flexbox = document.createElement('div');
    flexbox.id = 'flexbox';
    let i = 0;
    if (button === buttonInformationCharacters) {
        while (i < film.characters.length) {
            let character;
            const url = film.characters[`${i}`];
            await httpRequest(url + LANG_URL_PART).then(res => character = res)
                .catch(rej => {
                    console.log(rej);
                    i++;
                    character = null;
                });
            if (!character) continue;
            const characterInfo = document.createElement('div');
            const photo = document.createElement('img');
            const figure = document.createElement('figure');
            const figcaption = document.createElement('figcaption');
            const gender = document.createElement('img');
            const information = document.createElement('span');
            const arr = url.split('/');
            const characterId = +arr[arr.length-2];
            let genderName = character[`${lang.gender}`];
            if (lang ===  langWk)
            for (let key in lang) {
                if (lang[key] === genderName){
                    genderName = key;
                    break;
                }
            }
            characterInfo.className = 'info';
            gender.className = 'gender';
            photo.className = 'photo';
            photos.find(el => characterId === el.id)
                ? photo.src = photos.find(el => characterId === el.id).url
                : photo.src = 'images/empty-photo.png';
            gender.src = `images/${genderName.replace('/', '')}.png`;
            information.innerHTML = lang.name + `: ${character[`${lang.name}`]}<br>` +
                                    lang.birthYear + `: ${character[`${lang.birthYear}`]}<br>`
            figure.append(photo);
            figcaption.append(information, gender);
            characterInfo.append(figure, figcaption);
            flexbox.append(characterInfo);
            i++;
        }
    }
    if (button === buttonInformationPlanets) {
        while (i < film.planets.length) {
            let planet;
            await httpRequest(film.planets[`${i}`] + LANG_URL_PART).then(res => planet = res).catch(rej => {
                console.log(rej);
                i++;
                planet = null;
            });
            if (!planet) continue;
            const planetInfo = document.createElement('div');
            const information = document.createElement('span');
            planetInfo.className = 'info';
            information.innerHTML = lang.name + `: ${planet[`${lang.name}`]}<br>` +
                                    lang.climate + `: ${planet[`${lang.climate}`]}<br>` +
                                    lang.diameter + `: ${planet[`${lang.diameter}`]}<br>` +
                                    lang.population + `: ${planet[`${lang.diameter}`]}<br>`
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
        const filmNumberInDB = +film.url.substr(film.url.length - 2, 1);
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
            await printInfo(film.url.substr(0, film.url.length - 2) + prevEpisode, buttonInformationPlanets);
            hiddenLoader(true);
        })
        buttonNext.addEventListener('click', async function () {
            hiddenLoader(false);
            let nextEpisode;
            filmNumberInDB === 6 ? nextEpisode = 1 : nextEpisode = filmNumberInDB + 1;
            select.options.item(getEpisode(nextEpisode) - 1).selected = true;
            await printInfo(film.url.substr(0, film.url.length - 2) + nextEpisode, buttonInformationPlanets);
            hiddenLoader(true);
        })
    }
    title.innerHTML = film.title;
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

async function printInfo(url, button) {
    hiddenLoader(false);
    const film = await getFilm(url);
    await createFlexbox(film, button).catch(err => {
        console.log(err);
        hiddenLoader(true);
    });
    hiddenLoader(true);
}

buttonInformationCharacters.addEventListener('click', async function() {
    await printInfo(BASE_URL + 'films/' + getEpisode(+select.value), buttonInformationCharacters);
});

buttonInformationPlanets.addEventListener('click', async function() {
    await printInfo(BASE_URL + 'films/' + getEpisode(+select.value), buttonInformationPlanets);
});

language.addEventListener('change', async function() {
    if (language.value.toLowerCase() === 'wookiee') {
        LANG_URL_PART = '?format=wookiee';
        lang = langWk;
    } else {
        LANG_URL_PART = '';
        lang = langEn;
    }
    await printInfo(BASE_URL + 'films/' + getEpisode(+select.value), currentRequest);
});
