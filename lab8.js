let countDesigner = countDevs = countManags = 0;
function Designer(name, surname, baseSalary, workExp, coef) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    if (coef > 1 || coef < 0) {
        console.log("Write valid coefficient.");
        return false;
    }
    countDesigner++;
    this.coef = coef;
    this.countedSalary *= coef;
    return;
}
function Developer(name, surname, baseSalary, workExp) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    countDevs++;
    return;
}

function Manager(name, surname, baseSalary, workExp, Team) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    this.Team = Team;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    if (Team.length > 5 && Team.length <= 10) {
        this.countedSalary += 200;
    }
    if (Team.length > 10) {
        this.countedSalary += 300;
    }
    for (let i = 0; i < Team.length; i++) {
        if (typeof(this.Team) == Developer) {
        countDevs++;
        }
        if (typeof(this.Team) == Designer) {
            countDesigner++;
        }
    }
    if (countDevs > (countDevs + countDesigner) / 2) {
        this.countedSalary *= 1.1;
    }
    return;
}

function Department (manager) {
    this.manager = manager;
    this.workers = manager.Team;
    this.giveSalary = function() {
        for (let i = 0; i < this.manager.Team.length; i++) {
            console.log(this.manager.name + " " + this.manager.surname + " earn " + this.manager.countedSalary + " dollars");
        }
        for (let i = 0; i < this.manager.Team.length; i++) {
            console.log(this.manager.Team[i].name + this.manager.Team[i].surname + " earn " + this.manager.Team[i].countedSalary + " dollars"); 
        }
       
    }
}

let emp1 = new Designer("Vlad", "Sunko", 1700, 11, 0.8);
let emp2 = new Designer("Ivan", "Ivanov", 1700, 11, 0.8);
let emp3 = new Developer("Kirill", "Stepanenko", 1700, 11);
let emp4 = new Developer("Alex", "Zinchenko", 1700, 11);
let emp5 = new Developer("Andriy ", "Yarmolenko", 1700, 11);
let emp6 = new Designer("Ruslan ", "Malinovskyi", 1700, 11, 0.8);
let emp7 = new Designer("Vitaliy ", "Mykolenko, 1700, 11, 0.8);
let emp8 = new Developer("Artem  ", "Dovbyk", 1700, 11);
let emp9 = new Developer("Roman  ", "Yaremchuk", 2000, 5);
let emp10 = new Developer("Taras  ", "Stepanenko", 2000, 6);
let emp11 = new Developer("Andriy  ", "Pyatov", 2000, 6);
let emp12 = new Manager("Ilya ", "Zabarnyi", 4000, 8, [emp11, emp10, emp9, emp8, emp7, emp6, emp5, emp4, emp3, emp2, emp1]);
let depart = new Department(emp12);

depart.giveSalary();