export const span = document.createElement('span');
const spanIdGenerate = document.createElement('span');
export const buttonFontUp = document.createElement('button');
export const buttonFontDown = document.createElement('button');
const buttonNextId = document.createElement('button');
buttonNextId.className = 'atuin-btn';
buttonNextId.style.float = 'right';
buttonFontUp.className = 'atuin-btn';
buttonFontDown.className = 'atuin-btn';
buttonFontUp.innerText = 'Font Up';
buttonFontDown.innerText = 'Font Down';
buttonNextId.innerText = 'next Id';
span.innerHTML = 'Test font size';
span.style.fontSize = '2px';
span.style.display = 'block';
spanIdGenerate.style.float = 'right';
spanIdGenerate.style.paddingRight = '50px';
document.body.append(buttonFontUp, buttonFontDown, buttonNextId, span, spanIdGenerate);

function* createIdGenerator() {
    for(let i = 1; i < Infinity; i++) {
        spanIdGenerate.innerHTML = i;
        yield i;
    }
}

function* newFontGenerator(startValue) {
    let fontValue = startValue;
    let c;
    span.style.fontSize = startValue + 'px';
    c = yield startValue;
    while (startValue) {
        if (c === 'up') fontValue += 2;
        if (c === 'down' && fontValue > 2) fontValue -= 2;
        span.style.fontSize = fontValue + 'px';
        c = yield fontValue;
    }
}

const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator(14);

buttonFontDown.addEventListener('click', () => fontGenerator.next('down'));
buttonFontUp.addEventListener('click', () => fontGenerator.next('up'));
buttonNextId.addEventListener('click', () => idGenerator.next());