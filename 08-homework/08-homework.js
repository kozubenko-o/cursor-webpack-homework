const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(student) {
    return Object.keys(student.subjects)
        .map(el => el.slice(0 ,1).toUpperCase() + el.slice(1).replace(/_/gi, ' '));
}

function getAverageMark(student) {
    let allMarks = Object.values(student.subjects).flat();
    return (allMarks.reduce((res, el) => res + el, 0) / allMarks.length).toFixed(2);
}

function getStudentInfo(student) {
    let resultObject = {...student, averageMark: getAverageMark(student)};
    delete resultObject.subjects;
    return resultObject;
}

function getStudentsNames(students) {
    return students.map(el => el.name).sort();
}

function getBestStudent(students) {
    return students.map(el => getStudentInfo(el))
            .reduce((res, el) => res.averageMark > el.averageMark? res : el).name;
}

function calculateWordLetters(word) {
    let result = {};
    for (let i = 0; i< word.length; i++) {
        if (result[word[i].toLowerCase()]) {
            result[word[i].toLowerCase()]++
        } else {
            result[word[i].toLowerCase()] = 1;
        }
    }
    return result;
}

console.log('Список предметів для конкретного студента:');
console.log(getSubjects(students[0]));
console.log('Оцінка по усім предметам для переданого студента:');
console.log(getAverageMark(students[0]));
console.log('Інформація загального виду по переданому студенту:');
console.log(getStudentInfo(students[0]));
console.log('Імена студентів у алфавітному порядку:');
console.log(getStudentsNames(students));
console.log('Кращий студент зі списку по показнику середньої оцінки:');
console.log(getBestStudent(students));
console.log("Об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень:");
console.log(calculateWordLetters("test"));
