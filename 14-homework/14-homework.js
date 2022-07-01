

const buttonInformation = document.createElement('button');
const loader = document.createElement('div');
const selectContainer = document.createElement('div');
const select = document.createElement('select');
const selectText = document.createElement('div');
selectText.innerHTML = 'Select an episode: ';
for (let i = 0; i < 6; i++) {
    const option = document.createElement('option');
    option.innerHTML = i + 1;
    if (i === 4) option.selected = true;
    select.append(option);
}
selectContainer.id = 'select-container';
loader.classList.add('loader');
loader.classList.add('hidden');
buttonInformation.className = 'button-info';
buttonInformation.innerHTML = 'Отримати інформацію';
document.body.append(selectContainer);
selectContainer.append(buttonInformation);
selectContainer.append(selectText);
selectContainer.append(select);
document.body.append(loader);

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

buttonInformation.addEventListener('click', async function() {
    hiddenLoader(false);
    if (document.getElementById('table')) document.getElementById('table').remove();
    const table = document.createElement('table');
    table.id = 'table';
    const caption = table.createCaption();
    const tbody = table.createTBody();
    table.className = 'table';
    let episode = 0;
    +select.value + 3 <= 6 ? episode = +select.value + 3 : episode = +select.value - 3;
    let film;
    await httpRequest(BASE_URL + 'films/' + episode).then(res => film = res);
    caption.innerHTML = film.title;
    let i = 0
    while (i < film.characters.length) {
        let character;
        await httpRequest(film.characters[`${i}`]).then(res => character = res);
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdDate = document.createElement('td');
        const tdGender = document.createElement('td');
        const tdPhoto = document.createElement('td');
        const img = document.createElement('img');
        img.style.width = '50px';
        img.style.height = '50px';
        tdName.innerHTML = character.name;
        tdDate.innerHTML = character.birth_year;
        character.gender === 'n/a' || character.gender === 'none' ? img.src = 'images/na.png' : img.src = `images/${character.gender}.png`;
        tdPhoto.innerHTML = 'photo in progress';
        tdGender.append(img);
        tr.append(tdName);
        tr.append(tdDate);
        tr.append(tdGender);
        tr.append(tdPhoto);
        tbody.append(tr);
        i++;
        console.log(character);
    }
    document.body.appendChild(table);
    console.log(film);
    hiddenLoader(true);
});
