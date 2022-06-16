
class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }

    active = true;

    get getMarks() {
        if (!this.active) return null;
        return this.marks;
    }

    set setMark(mark) {
        if (this.active) this.marks.push(mark);
    }

    getInfo() {
        return `Студент ${this.course}го курсу, ${this.university}, ${this.fullName}`
    }

    getAverageMark() {
        return this.marks.reduce((res, el) => res + el) / this.marks.length
    }

    dismiss() {
        this.active = false;
    }

    recover() {
        this.active = true;
    }

}


const mark = new Student(
    'Одеський політехнічний університет',
    2,
    'Марк Іванов',
    [5, 4, 4, 5]
);

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university, course, fullName, marks);
        this.getScholarship();
    }
    getScholarship() {
        if (this.active && this.getAverageMark() >= 4)
            console.log(`${this.fullName}, Ви отримали 1400 грн. стипендії`);
        setTimeout(() => this.getScholarship(), 30000);
    }
}

const oleg = new BudgetStudent(
    'Київський політехнічний університет',
    4,
    'Олег Дужий',
    [5, 4, 4, 5]
);

console.log(mark.getInfo());
console.log(mark.getMarks);
mark.setMark = 5;
console.log(mark.getMarks);
console.log(mark.getAverageMark());
mark.dismiss();
mark.setMark = 6;
console.log(mark.getMarks);
mark.recover();
mark.setMark = 4;
console.log(mark.getMarks);