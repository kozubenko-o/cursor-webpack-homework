let numberOfFuncManually = +prompt('Чи бажаєте ввести дані конкретної функції(введіть № ф-кції)?');

function toEnterData(typeToEnter ,message, numberOfFunction, defaultData, emptyString) {
    if (numberOfFuncManually === numberOfFunction) {
        let someData;
        let toNext;
        do {
            someData = prompt(`Введіть ${message} (функція № ${numberOfFunction})`, defaultData);
            if (typeToEnter === 'number') {
                toNext = !(Number(someData) || someData.trim() === '0');
            }
            if (typeToEnter === 'string' && !emptyString) {
                toNext = someData.trim() === '';
            } else {
                toNext = someData === '';
            }
        } while (toNext);
        return someData;
    }
    return undefined;
}


// Function # 1
function getMaxDigit(number = 1248.1942) {
    let maxDigit = 0;
    for (let i = 0; i < number.toString().length; i++) {
        if (+number.toString()[i]) {
            maxDigit = Math.max(maxDigit, +number.toString()[i]);
        }
    }
    return `Максимальна цифра числа ${number} -> ${maxDigit}`;
}

//Function # 2
function getDegreeOfNumbers(baseNumber = 3, numberOfDegree = 3) {
    numberOfDegree = Math.floor(numberOfDegree);
    let degree = baseNumber;
    for (let i = Math.abs(numberOfDegree); i > 1 ; i--) {
        degree *= baseNumber;
    }
    if (numberOfDegree < 0) {
        degree = 1 / degree;
    }
    if (numberOfDegree === 0) {
        degree = 1;
    }
    if (baseNumber === 0 && numberOfDegree < 0) {
        degree = 'Помилка! Піднесення 0 до негативного ступеня';
    }
    return `${baseNumber} <sup>${numberOfDegree}</sup> = ${degree}`;
}

//Function # 3
function changeFirstSymbolToUpperCase(message = 'default STRING') {
    return '(' + message + ') ' + message.trim()[0].toUpperCase() + message.trim().slice(1).toLowerCase();
}

//Function # 4
function calcNetSalary(salary = 1000, tax = 18, tax2 = 1.5) {
    return `Податок: ${tax + tax2}%, з/п: ${salary}, дохід: ${salary - (tax + tax2) * salary / 100}`;
}

//Function # 5
function getRandomIntInRange(numberFirst = 1, numberSecond = 10) {
    if (Math.floor(numberFirst) <= Math.floor(numberSecond)) {
        return `Випадкове ціле число у діапазоні від ${Math.floor(numberFirst)} до ${Math.floor(numberSecond)} : 
        ${Math.floor(Math.random() * 
            (Math.floor(numberSecond) - Math.floor(numberFirst)) + Math.floor(numberFirst))}`;
    } else {
        return `Випадкове ціле число у діапазоні від ${Math.floor(numberSecond)} до ${Math.floor(numberFirst)} : 
        ${Math.floor(Math.random() * (Math.floor(numberFirst) - 
            Math.floor(numberSecond)) + Math.floor(numberSecond))}`;
    }
}

//Function # 6
function calcRepeatLetter(letter = 'а', word = 'Асталавіста') {
    let countLetter = 0;
    for (let i = 0; i < word.length; i ++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            countLetter++;
        }
    }
    return `У строці "${word}" буква(символ) "${letter}" повторюється ${countLetter} рази(ів)`;
}

//Function # 7
function convertCurrency(string = '100$', exchangeRates = 30) {
    let currency;
    if (string.indexOf('USD') !== -1) {
        currency = 'USD';
    } else if (string.indexOf('$') !== -1) {
        currency = '$';
    } else if (string.toLowerCase().indexOf('uah') !== -1) {
        currency = 'UAH';
    } else {
        return 'Помилка: невідома влюта. Введіть $ або UAH';
    }
    if (!Number(string.slice(0, string.toLowerCase().indexOf(currency.toLowerCase())))
        || Number(string.slice(0, string.toLowerCase().indexOf(currency.toLowerCase()))) < 0) {
        return `Помилка: число "${string.toLowerCase().slice(0, string.toLowerCase().indexOf(currency.toLowerCase()))}" 
                від'ємне або не є числом`;
    } else if (string.slice(string.toLowerCase().indexOf(currency.toLowerCase())).trim().length !== currency.length) {
        return 'Помилка: невірно введена валюта ' + string.slice(string.toLowerCase().indexOf(currency.toLowerCase()));
    }
    if (currency === '$' || currency === 'USD') {
        return `Курс 1$ = ${exchangeRates} UAH. 
                ${Number(string.slice(0, string.toLowerCase().indexOf(currency.toLowerCase())))} ${currency} = 
                ${Number(string.slice(0, string.toLowerCase().indexOf(currency.toLowerCase()))) * exchangeRates} UAH`;
    } else {
        return `Курс 1$ = ${exchangeRates} UAH. 
                ${Number(string.slice(0, string.toLowerCase().indexOf(currency.toLowerCase())))} ${currency} = 
                ${Number(string.slice(0, string.toLowerCase().indexOf(currency.toLowerCase()))) / exchangeRates} $`;
    }
}

//Function # 8
function getRandomPassword(length = 8) {
    let factor = 1;
    for (let i = 0; i < Math.floor(length); i++) {
        factor *= 10;
    } if (Math.floor(length) <= 0) {
        return `Неможливо створити пароль із ${Math.floor(length)} чисел`;
    }
    //Можна використати тільки цей варіант, але вирішив залишити обидва
    if (Math.floor(Math.random() * factor)) {
        let password = '';
        for (let i = 0; i < Math.floor(length); i++) {
            password += Math.floor(Math.random() * 10);
        }
        return `Випадковий пароль із "${Math.floor(length)}" чисел(числа): ${password}`;
    }
    return `Випадковий пароль із "${Math.floor(length)}" чисел(числа): ${Math.floor(Math.random() * factor)}`;
}

//Function # 9
function deleteSymbols(symbol = 'a', string = 'JavaScript') {
    return `Видалимо зі строки "${string}" всі символи "${symbol}": 
            ${string.toLowerCase().split(symbol.toLowerCase()).join('')}`;
}

//Function # 10
function isPalindrome(string = 'Молебен о коне белом') {
    let stringConversely = '';
    function toOneString(result) {
        return  result.replace(/[^a-zA-Zа-яА-Я0-9]+/g, '');
    }
    for (let i = toOneString(string).length - 1; i >= 0; i--) {
        stringConversely += toOneString(string).toLowerCase()[i];
    }
    return `"${string}" ${toOneString(string).toLowerCase() === stringConversely ? 'є' : 'не є'} паліндромом`;
}

//Function # 11
function deleteDuplicateSymbol(string = 'Видалити символи, що повторюються') {
    let resultString = string;
    let counter;
    for (let i = 0; i < string.length; i++) {
        counter = 0;
        for (let j = 0; j < string.length; j++) {
            if (string[i].toLowerCase() === string[j].toLowerCase()) {
                counter++;
            }
            if (counter > 1) {
                //Можна було б заюзати deleteSymbols(), якби ф-ція виводила результат без пояснення
                resultString = resultString.toLowerCase().split(string[j].toLowerCase()).join('');
                break;
            }
        }
    }

    return `Зі строки "${string}" видаляємо символи, що повторюються: ${resultString}`;
}

document.writeln(
   `Function # 1: ${getMaxDigit(
        toEnterData(
            'number',
            'число', 
            1, 
            1275.4651))}<br><br>
    Function # 2: ${getDegreeOfNumbers(
        toEnterData(
            'number',
            'число-основу', 
            2, 
            4),
        toEnterData(
            'number',
            'число-ступінь(буде округлено о меншого)', 
            2, 
            5))}<br><br>
    Function # 3: ${changeFirstSymbolToUpperCase(
        toEnterData(
            'string', 
            'дані', 
            3, 
            'some DATA', 
            false))}<br><br>
    Function # 4: ${calcNetSalary(
        toEnterData(
            'number', 
            'з/п', 
            4, 
            2000),
        toEnterData(
            'number', 
            'основний податок', 
            4, 
            19),
        toEnterData(
            'number', 
            'додатковий податок', 
            4, 
            2.5))}<br><br>
    Function # 5: ${getRandomIntInRange(
        toEnterData(
            'number', 
            'перше ціле число діапазону(відбудеться округлення до меншого)', 
            5, 
            10),
        toEnterData(
            'number', 
            'друге ціле число діапазону(відбудеться округлення до меншого)', 
            5, 
            50))}<br><br>
    Function # 6: ${calcRepeatLetter(
        toEnterData(
            'string', 
            'букву(символ) для розрахунків(можна ввести пробіл)', 
            6, 
            'в', 
            true),
        toEnterData(
            'string', 
            'слово або сторку', 
            6,
            'Вівальді', 
            false))}<br><br>
    Function # 7: ${convertCurrency(
        toEnterData(
            'string', 
            'суму для конвертації', 
            7, 
            '4000UAH', 
            false),
        toEnterData(
            'number', 
            'чому дорівнює 1$', 
            7, 
            30))}<br><br>
    Function # 8: ${getRandomPassword(
        toEnterData(
            'number', 
            'кількість символів пароля(не ціле число буде округлено до меншого)', 
            8, 
            5))}<br><br>
    Function # 9: ${deleteSymbols(
        toEnterData(
            'string', 
            'букву/символ яка(ий) буде видалений зі слова/строки(можна ввести пробіл)', 
            9, 
            'о', 
            true),
        toEnterData(
            'string', 
            'слово/строку', 
            9, 
            'пропорційно', 
            false))}<br><br>
    Function # 10: ${isPalindrome(
        toEnterData(
            'string', 
            'слово/строку(перевірка на паліндром)', 
            10, 
            'Аргентина манит негра', 
            false))}<br><br>
    Function # 11: ${deleteDuplicateSymbol(
        toEnterData(
            'string', 
            'слово/строку', 
            11, 
            'Якась стрінга з якимись символами', 
            false))}<br><br>`
);





