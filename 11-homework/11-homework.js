const buttonBlock = document.createElement('button');
const buttonBlockInterval = document.createElement('button');
buttonBlock.className = 'atuin-btn';
buttonBlockInterval.className = 'atuin-btn';
buttonBlock.innerText = 'generate Blocks';
buttonBlockInterval.innerText = 'generate Blocks Interval';
document.body.append(buttonBlock, buttonBlockInterval);

function colorGenerate() {
    return `${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}`;
}

let isRecursion = false;
let stopStart = false;
const timeout = 1000

function generateBlocks(heightTable = 5, widthTable = 5) {
    if (document.getElementById('table')) {
        if (isRecursion) {
            stopRecursion();
            setTimeout(() => stopRecursion(), timeout + 1);
        }
        document.getElementById('table').remove();
    }
    const table = document.createElement('table');
    const tbody = table.createTBody();
    table.id = 'table';
    tbody.id = 'tbody';
    document.body.append(table);

    for (let i = 0; i < heightTable; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < widthTable; j++) {
            const td = document.createElement('td');
            td.style.width = '50px';
            td.style.height = '50px';
            td.style.background = `rgb(${colorGenerate()})`;
            tr.append(td);
        }
        tbody.append(tr);
    }
}

function changeColorBlocks() {
    isRecursion = true;
    if (stopStart) {
        stopRecursion();
        setTimeout(() => '', timeout + 1);
        return;
    }
    const arrayTd = document.querySelectorAll('td');
    arrayTd.forEach(td => td.style.background = `rgb(${colorGenerate()})`);
    setTimeout(() => changeColorBlocks(), timeout);
}

function stopRecursion() {
    stopStart = !stopStart;
}

function generateBlocksInterval() {
    if (document.getElementById('table')) {
        if (isRecursion) stopRecursion();
        document.getElementById('table').remove();
    }
    generateBlocks();
    changeColorBlocks();
}

buttonBlock.addEventListener('click', () => generateBlocks());
buttonBlockInterval.addEventListener('click', () => generateBlocksInterval());




