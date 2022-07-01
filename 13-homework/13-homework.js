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
    return string;
}


getRandomChinese(4).then(result => console.log(result));