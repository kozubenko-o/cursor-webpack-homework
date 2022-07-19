import "../../14-homework/14-homework.css"
import "../../15-homework/15-homework.css"
import "./index.scss"
import audio from "../../12-homework/audio/kick.wav"
import img from "../../14-homework/images/male.png"
import {potato, buttonPrintHW1} from "../../01-homework/01-homework.js";
import {getNumberFromPrompt, buttonStartHW2} from "../../02-homework/02-homework.js";
import {calcRepeatLetter, buttonStartHW3} from "../../03-homework/03-homework.js";
import {students, studentsPairs, buttonToPrintHW5} from "../../05-homework/05-homework.js";
import {getRandomArray, buttonToPrintConsoleHW7} from "../../07-homework/07-homework.js";
import {calculateWordLetters, buttonToPrintConsoleHW8} from "../../08-homework/08-homework.js";
import {ukraine, getMiddleTaxes, buttonToPrintConsoleHW9} from "../../09-homework/09-homework.js";
import {mark, buttonToPrintConsoleHW10} from "../../10-homework/10-homework.js";
import {buttonBlock} from "../../11-homework/11-homework.js";
import {getData, buttonToPrintConsoleHW13} from "../../13-homework/13-homework.js";
import {BASE_URL, httpRequest, language, select, buttonInformationCharacters,
            buttonInformationPlanets, selectText} from "../../14-homework/14-homework.js";
import {langEn, photos} from "../../14-homework/objects";
import {span, buttonFontDown, buttonFontUp} from "../../15-homework/15-homework";

document.body.style.background = "none";
[buttonPrintHW1, buttonStartHW2, buttonStartHW3, buttonToPrintHW5, buttonToPrintConsoleHW7,
    buttonToPrintConsoleHW8, buttonToPrintConsoleHW9, buttonToPrintConsoleHW10, buttonBlock,
    buttonToPrintConsoleHW13, language, select, buttonInformationCharacters,
    buttonInformationPlanets, selectText, span, buttonFontDown, buttonFontUp]
    .forEach(el => el.style.display = 'none');


// HW #1
console.log("HW #1 potato price = ", potato);

// HW #2
setTimeout(() =>
    console.log("HW #2 entered number = ", getNumberFromPrompt("Введіть ціле число (HW #2)")), 10000);

// HW #3
console.log("HW #3 calcRepeatLetter: ", calcRepeatLetter());

// HW #5
console.log("HW #5 studentsPairs: ", studentsPairs(students));

// HW #7
console.log("HW #7 getRandomArray: ", getRandomArray(19, -12, 22));

// HW #8
console.log("HW #8 calculateWordLetters: ", calculateWordLetters("heardStone"));

// HW #9
console.log("HW #9 getMiddleTaxes: ", getMiddleTaxes.call(ukraine));

// HW #10
console.log("HW #10 mark.getInfo(): ", mark.getInfo());

// HW #11
buttonBlock.style.flex = "none";

// HW #12
let sound = new Audio(audio);
const kick = document.createElement('div');
kick.className = 'kick';
kick.style.cursor = 'pointer';
document.body.append(kick);
kick.addEventListener('click', () => {
    kick.classList.add('hit');
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => kick.classList.remove('hit'), 50);
});

// HW #13
getData(8);

// HW #14
httpRequest(BASE_URL + 'people/1')
    .then(res => {
        const characterInfo = document.createElement('div');
        const photo = document.createElement('img');
        const figure = document.createElement('figure');
        const figcaption = document.createElement('figcaption');
        const gender = document.createElement('img');
        const information = document.createElement('span');
        characterInfo.className = 'info';
        gender.className = 'gender';
        photo.className = 'photo';
        photo.src = photos.find(el => res.name === el.name).url;
        gender.src = img;
        information.innerHTML = `${langEn.name} : ${res.name}<br>
                ${langEn.birthYear} : ${res.birth_year}<br>`;
        figure.append(photo);
        figcaption.append(information, gender);
        characterInfo.append(figure, figcaption);
        document.body.append(characterInfo);
    });

