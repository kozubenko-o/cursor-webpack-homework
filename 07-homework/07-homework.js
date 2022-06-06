function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(Math.floor(max) - Math.floor(min) + 1) + Math.floor(min))
}

function getRandomArray(length, min, max) {
    return Array.from(Array(Math.floor(length)), () => getRandomNumber(min, max));
    // return Array(length).fill(0).map(() => getRandomNumber(min, max));
    // return [...Array(length)].map(() => getRandomNumber(min, max));
}
const randomArray = getRandomArray(21, 1, 18);


function getModa(...numbers) {
    Array.isArray(numbers[0]) ? numbers = [...numbers[0]] : '';
    numbers = numbers.filter(el => Number.isInteger(el));
    let arr = [];
    let result = [];
    numbers.forEach(el1 => {
        arr.push(numbers.reduce((res, el2) => {
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
    Array.isArray(numbers[0]) ? numbers = [...numbers[0]] : '';
    numbers = numbers.reduce((res, el) => Number.isInteger(el) ? [res[0] + el, ++res[1]] : res, [0, 0]);
    return numbers[0]/numbers[1];
}

function getMedian(...numbers) {
    Array.isArray(numbers[0]) ? numbers = [...numbers[0]] : '';
    numbers = numbers
        .filter(el => Number.isInteger(el))
        .sort((a, b) => a-b);
    let median;
    numbers.length % 2 === 0
        ? median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
        : median = (numbers[Math.floor(numbers.length / 2)]);
    return median;
}

function filterEvenNumbers(...numbers) {
    Array.isArray(numbers[0]) ? numbers = [...numbers[0]] : '';
    return numbers.filter(el => el % 2 !== 0);
}

function countPositiveNumbers(...numbers) {
    Array.isArray(numbers[0]) ? numbers = [...numbers[0]] : '';
    return numbers.reduce((res, el) => el > 0 ? ++res : res, 0);
}

function getDividedByFive(...numbers) {
    Array.isArray(numbers[0]) ? numbers = [...numbers[0]] : '';
    return numbers.filter(el => el % 5 === 0);
}

function replaceBadWords(string = 'Holy shit! Are you fucking kidding?') {
    const badWords = ['shit', 'fuck'];
    let newString = string.split(' ');
    console.log(newString);
    newString = newString.map((el, index) => {
        let badIndex = badWords.map(word => {
            let w = el.split(word);
            return w.reduce((res, el1) => el1 === '' ? res + index : res, -1);
        });
        console.log(badIndex);
        return badIndex !== '' ? index : -1;
    });

    console.log(newString);
    return newString.join(' ');
}
console.log('Масив рандомных чисел:  ', randomArray);
console.log(`Мода масиву ${randomArray}:   ${getModa(randomArray)}`);
//console.log(`Мода масиву 2,3.5,2,3.5,3.5,2.3,2.1,3.5:   ${getModa(2,3.5,2,3.5,3.5,2.3,2.1,3.5)}`);
console.log(`Середнє арифметичне масиву ${randomArray}:   ${getAverage(randomArray).toFixed(2)}`);
//console.log(`Середнє арифметичне масиву 2,2,2,2,2,2.3,2.1,3.5:   ${getAverage(2,2,2,2,2,2.3,2.1,3.5)}`);
console.log(`Медіана масиву  ${randomArray}:   ${getMedian(randomArray)}`);
//console.log(`Медіана масиву 2,1,15,2.5,2,3.2,2.2,2.1,2,12:   ${getMedian(2,1,15,2.5,2,3.2,2.2,2.1,2,12)}`);
console.log(`Фільтрація парних чисел масиву ${randomArray}:   ${filterEvenNumbers(randomArray)}`);
//console.log(`Фільтрація парних чисел масиву 2,1,15,2.5,2,3.2,2.2,2.1,2,12:   ${filterEvenNumbers(2,1,15,2.5,2,3.2,2.2,2.1,2,12)}`);
console.log(`К-сть позитивних єлементів масиву ${randomArray}:   ${countPositiveNumbers(randomArray)}`);
//console.log(`К-сть позитивних єлементів масиву -2,-1,-15,-2.5,2,-3.-2,2.-2,2,12:   ${countPositiveNumbers(-2,-1,-15,-2.5,2,-3.-2,2.-2,2,12)}`);
console.log(`${randomArray} // Діляться на ціло на 5:   ${getDividedByFive(randomArray)}`);
console.log(replaceBadWords());