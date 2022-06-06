const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];

const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];

const marks = [4, 5, 5, 3, 4, 5];

function studentsPairs(students) {
    let femaleNames = [];
    let maleNames = [];
    let result =[]
    for(let i in students) {
        if (students[i][students[i].length -1] === 'а') {
            femaleNames.push(students[i]);
        } else {
            maleNames.push(students[i]);
        }
    }
    for (let i = 0; i < maleNames.length; i++) {
        result.push([maleNames[i], femaleNames[i]]);
    }
    return result;
    //return [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
}

function pairsThemes(studentsPairs, themes) {
    const result = [];
    for (let i = 0; i < studentsPairs.length; i++) {
        result.push([studentsPairs[i][0] + ' i ' + studentsPairs[i][1], themes[i]]);
    }
    return result;
}

function studentsMarks(students, marks) {
    const result = [];
    for (let i = 0; i < students.length; i++) {
        result.push([students[i], marks[i]]);
    }
    return result;
}

function pairsMarks(pairsThemes) {
    const result = [];
    for (let sp of pairsThemes) {
        result.push([sp[0], sp[1], Math.floor(Math.random() * 5 + 1)]);
    }
    return result;
}
(function test() {
    for (let i = 0; i < 200; i++) {
        console.log(Math.floor(Math.random() * 5 + 1));
    }
})();


console.log(studentsPairs(students));
console.log(pairsThemes(studentsPairs(students), themes));
console.log(studentsMarks(students, marks));
console.log(pairsMarks(pairsThemes(studentsPairs(students), themes)));