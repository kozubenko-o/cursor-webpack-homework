export const buttonStartHW2 = document.createElement('button');
buttonStartHW2.innerHTML = "Start";
document.body.append(buttonStartHW2);
buttonStartHW2.addEventListener('click', () => start());

let numberN;
let numberM;
let missEvenNumbers;
let sum = 0;

export function getNumberFromPrompt(message) {
    let str;
    do {
        str = prompt(message);
    } while (!str || str.trim() === '' || !Number.isInteger(Number(str)));
    if (typeof numberN === 'number' && Number(str) <= numberN) {
        alert('Число М повинно бути більшим за число N, N = ' + numberN);
        return getNumberFromPrompt(message);
    } else {
        return Number(str);
    }
}

function start() {
    numberN = getNumberFromPrompt('Введіть перше ціле число (N)');
    numberM = getNumberFromPrompt('Введіть друге ціле число (M)');
    missEvenNumbers = confirm('Чи пропускати парні числа?');

    for (let i = numberN; i <= numberM; i++) {
        if (missEvenNumbers && i % 2 === 0) {
            continue;
        }
        sum += i;
    }

    document.writeln(`Було введено: <ul> 
                                    <li>число N = ${numberN}</li>
                                    <li>число M = ${numberM}</li>
                                    <li>пропускати парні числа - ${missEvenNumbers}</li>
                                </ul>
                 Сума до виводу = ${sum}`);
}