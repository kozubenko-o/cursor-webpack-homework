function colorGenerate() {
    return `${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}`;
}

let isRecursion = false;
let stopStart = false;

function generateBlocks(heightTable = 5, widthTable = 5) {
    if (document.getElementById('table')) {
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
    const timeout = 1000
    if (stopStart) {
        stopRecursion();
        setTimeout(() => '', timeout + 1);
        return;
    }
        const tbody = document.getElementById('tbody');
        for (let i = 0; i < tbody.childNodes.length; i++) {
            for (let j = 0; j < tbody.childNodes[i].childNodes.length; j++) {
                tbody.childNodes[i].childNodes[j].style.background = `rgb(${colorGenerate()})`;
            }
        }
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




