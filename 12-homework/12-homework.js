const drums = [
    {
        name: 'kick',
        keyCode: 'Numpad0'
    },
    {
        name: 'snare',
        keyCode: 'Numpad2'
    },
    {
        name: 'tom1',
        keyCode: 'Numpad5'
    },
    {
        name: 'tom2',
        keyCode: 'Numpad6'
    },
    {
        name: 'floor-tom',
        keyCode: 'NumpadEnter'
    },
    {
        name: 'hi-het',
        keyCode: 'Numpad1'
    },
    {
        name: 'crash',
        keyCode: 'Numpad8'
    },
    {
        name: 'ride',
        keyCode: 'Numpad9'
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
    const drumsElement = document.querySelector(`[key-play-div=${event.code}]`);
    const audioElement = document.querySelector(`[key-play-audio=${event.code}]`);
    drumsElement.classList.toggle('hit');
    setTimeout(() => drumsElement.classList.toggle('hit'), 50);
    audioElement.currentTime = 0;
    audioElement.play();
})
