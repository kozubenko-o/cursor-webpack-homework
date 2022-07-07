const drums = [
    {
        name: 'kick',
        keyCode: 'Space'
    },
    {
        name: 'snare',
        keyCode: 'KeyN'
    },
    {
        name: 'tom1',
        keyCode: 'KeyH'
    },
    {
        name: 'tom2',
        keyCode: 'KeyJ'
    },
    {
        name: 'floor-tom',
        keyCode: 'KeyM'
    },
    {
        name: 'hi-het',
        keyCode: 'KeyF'
    },
    {
        name: 'crash',
        keyCode: 'KeyU'
    },
    {
        name: 'ride',
        keyCode: 'KeyI'
    }
]
const textDiv = document.createElement('div');
textDiv.className = 'text';
document.body.append(textDiv);

const drumKit = document.createElement('div');
drumKit.className = 'drum-kit';
document.body.append(drumKit);

drums.forEach(d => {
    const text = document.createElement('h1');
    const audio = document.createElement('audio');
    const el = document.createElement('div');
    text.innerText = `${d.name} --- ${d.keyCode}`;
    audio.setAttribute('key-play-audio', d.keyCode);
    audio.setAttribute('src', `audio/${d.name}.wav`);
    el.className = d.name;
    el.setAttribute('key-play-div', d.keyCode);
    el.style.cursor = 'pointer';
    drumKit.append(el);
    document.body.append(audio);
    textDiv.append(text);
    el.addEventListener('click', function () {
        el.classList.toggle('hit');
        setTimeout(() => el.classList.toggle('hit'), 50);
        audio.currentTime = 0;
        audio.play();
    })
})


document.addEventListener('keydown', function (event) {
    console.log(event.code);
    const drumsElement = document.querySelector(`[key-play-div=${event.code}]`);
    const audioElement = document.querySelector(`[key-play-audio=${event.code}]`);
    drumsElement.classList.toggle('hit');
    setTimeout(() => drumsElement.classList.toggle('hit'), 50);
    audioElement.currentTime = 0;
    audioElement.play();
})
