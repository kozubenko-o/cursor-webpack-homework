const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return this.tax * salary;
}

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

function getMySalary() {
    const salary = Math.floor(Math.random()*501 + 1500);
    const taxes = getMyTaxes.call(this, salary);
    console.log({
        salary: salary,
        taxes: +taxes.toFixed(2),
        profit: +(salary - taxes).toFixed(2)
    });
    setTimeout(() => getMySalary.call(this), 10000);
}

console.log(getMyTaxes.call(ukraine, 1000));
console.log(getMiddleTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));
getMySalary.call(ukraine);