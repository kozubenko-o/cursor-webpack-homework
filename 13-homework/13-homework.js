export const buttonToPrintConsoleHW13 = document.createElement('button');
buttonToPrintConsoleHW13.innerHTML = "Print console";
document.body.append(buttonToPrintConsoleHW13);
buttonToPrintConsoleHW13.addEventListener('click', () => toPrintConsole());

let count = 0;

function promiseReturn() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const date = Date.now().toString();
            res(String.fromCharCode(date.substr(date.length - 5)));
        }, 50);
    });
}
async function getRandomChinese(length) {
    if (length < 1) return 'Введене число < 1';
    let string = '';
    while (count < length) {
        await promiseReturn().then(char => string = string + char);
        count++;
    }
    if (length === count)
        count = 0;
    return string;
}


// getData створена  для зручного тестування через консоль
export function getData(length) {
    getRandomChinese(length).then(res => {
        if (document.querySelector("span"))
            document.querySelector("span").remove();
        const span = document.createElement('span');
        span.className = "some-symbols";
        span.innerHTML = res;
        document.body.append(span);
    });
}
function toPrintConsole() {
    getData(4);
}