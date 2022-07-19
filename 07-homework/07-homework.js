export const buttonToPrintConsoleHW7 = document.createElement('button');
buttonToPrintConsoleHW7.innerHTML = "Print console";
document.body.append(buttonToPrintConsoleHW7);
buttonToPrintConsoleHW7.addEventListener('click', () => toPrintConsole());

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(Math.floor(max) - Math.floor(min) + 1) + Math.floor(min))
}

export function getRandomArray(length, min, max) {
    return Array.from(Array(Math.floor(length)), () => getRandomNumber(min, max));
    // return Array(length).fill(0).map(() => getRandomNumber(min, max));
    // return [...Array(length)].map(() => getRandomNumber(min, max));
}

function getArray(numbers) {
    let numbersArr;
    if (Array.isArray(numbers[0])) {
        numbersArr = [...numbers[0]]
    } else {
        numbersArr = numbers;
    }
    return numbersArr;
}

function getModa(...numbers) {
    let numbersArr = getArray(numbers);
    numbersArr = numbersArr.filter(el => Number.isInteger(el));
    let arr = [];
    let result = [];
    numbersArr.forEach(el1 => {
        arr.push(numbersArr.reduce((res, el2) => {
            if (el1 === el2) res[1]++;
            return res;
        }, [el1, 0]));
    });
    const maxRepeat = arr.reduce((res, el) => el[1] > res ? el[1] : res, 0);
    arr = arr.filter(el => el[1] === maxRepeat);
    arr.forEach(el => result.push(el[0]));
    result = result.filter((el, index) => result.indexOf(el) === index);
    return result;
}

function getAverage(...numbers) {
    let numbersArr = getArray(numbers);
    numbersArr = numbersArr.reduce((res, el) => Number.isInteger(el) ? [res[0] + el, ++res[1]] : res, [0, 0]);
    return numbersArr[0]/numbersArr[1];
}

function getMedian(...numbers) {
    let numbersArr = getArray(numbers);
    numbersArr = numbersArr
        .filter(el => Number.isInteger(el))
        .sort((a, b) => a-b);
    let median;
    numbersArr.length % 2 === 0
        ? median = (numbersArr[numbersArr.length / 2 - 1] + numbersArr[numbersArr.length / 2]) / 2
        : median = (numbersArr[Math.floor(numbersArr.length / 2)]);
    return median;
}

function filterEvenNumbers(...numbers) {
    let numbersArr = getArray(numbers);
    return numbersArr.filter(el => el % 2 !== 0);
}

function countPositiveNumbers(...numbers) {
    let numbersArr = getArray(numbers);
    return numbersArr.reduce((res, el) => el > 0 ? ++res : res, 0);
}

function getDividedByFive(...numbers) {
    let numbersArr = getArray(numbers);
    return numbersArr.filter(el => el % 5 === 0);
}

function replaceBadWords(string = 'Holy shit! Are you fucking kidding? Fuck you!') {
    const badWords = ['shit', 'fuck'];
    let newString = string.split(' ');
    newString = newString.map(word => {
        let badWord = badWords.find(bw => word.toLowerCase().includes(bw.toLowerCase()));
        let newWord = word;
        if (badWord) {
            if (badWord.toLowerCase() === word.toLowerCase()) {
                newWord = '****';
            } else {
                newWord = word.toLowerCase().split(badWord.toLowerCase())
                    .reduce((res, p) => p === '' ? res + '****' : res + p, '');
            }
        }
        return newWord;
    });
    return newString.join(' ');
}

function divideByThree(string = 'Live Commander') {
    return  string.toLowerCase().split(' ').join('').split('')
                .reduce((res, el) =>
                    (res.length + 1) % 4 === 0 && res.length!== 0 ? res + ' ' + el : res + el , '')
                .split(' ');
}

function generateCombinations(word) {
    if (word.length > 10) {
        return '!!!К-сть букв у слові більше за 10';
    }
    if (word.length <= 1) {
        return word;
    }
    let indexBoolean = [];
    let result = [];
    // debugger;
    enumeration(word, indexBoolean, '');
    function enumeration(initialValue, index, string) {
        if (initialValue.length === string.length) {
                return result.push(string);
            } else {
                for (let i = 0; i < initialValue.length; i++) {
                    if (!index[i]) {
                        index[i] = true;
                        enumeration(initialValue, index, string + initialValue[i]);
                        index[i] = false;
                    }
                }
            }
    }
    return result.filter((el, index) => result.indexOf(el) === index);
}

function toPrintConsole() {
    const randomArray = getRandomArray(21, -9, 18);

    console.log('Масив рандомных чисел:   ', randomArray);
    console.log(`Мода масиву ${randomArray}:   ${getModa(randomArray)}`);
//console.log(`Мода масиву 2,3.5,2,3.5,3.5,2.3,2.1,3.5:   ${getModa(2,3.5,2,3.5,3.5,2.3,2.1,3.5)}`);
    console.log(`Середнє арифметичне масиву ${randomArray}:    ${getAverage(randomArray).toFixed(2)}`);
//console.log(`Середнє арифметичне масиву 2,2,2,2,2,2.3,2.1,3.5:   ${getAverage(2,2,2,2,2,2.3,2.1,3.5)}`);
    console.log(`Медіана масиву  ${randomArray}:   ${getMedian(randomArray)}`);
//console.log(`Медіана масиву 2,1,15,2.5,2,3.2,2.2,2.1,2,12:   ${getMedian(2,1,15,2.5,2,3.2,2.2,2.1,2,12)}`);
    console.log(`Фільтрація парних чисел масиву ${randomArray}:   ${filterEvenNumbers(randomArray)}`);
//console.log(`Фільтрація парних чисел масиву 2,1,15,2.5,2,3.2,2.2,2.1,2,12:   ${filterEvenNumbers(2,1,15,2.5,2,3.2,2.2,2.1,2,12)}`);
    console.log(`К-сть позитивних єлементів масиву ${randomArray}:   ${countPositiveNumbers(randomArray)}`);
//console.log(`К-сть позитивних єлементів масиву -2,-1,15,1,8,-2,2,-3,2,-2,2,12:   ${countPositiveNumbers(-2,-1,15,1,8,-2,2,-3,2,-2,2,12)}`);
    console.log(`${randomArray} // Діляться на ціло на 5:   ${getDividedByFive(randomArray)}`);
    console.log('Заміняємо погані слова: ' + replaceBadWords());
    console.log('Розбиваємо кожне слово на умовні склади по 3 букви(default "Live Commander"): ' + divideByThree());
    console.log('Всі можливі перестановки: ');
    console.log(generateCombinations('coffee'));
}