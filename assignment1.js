var employee = /** @class */ (function () {
    function employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    employee.prototype.calculate = function () {
        this.hra = this.salary * 0.30;
        this.da = this.salary * 0.50;
        this.ta = this.salary * 0.20;
        this.pf = this.salary * 0.12;
        this.gross = this.salary + this.hra + this.da + this.ta - this.pf;
    };
    employee.prototype.print = function () {
        console.log(this.gross);
    };
    return employee;
}());
var a = new employee(2, "Aishwarya", 60000);
a.calculate();
a.print();
