var Student1 = /** @class */ (function () {
    function Student1(RollNo, Name, Math, Phy, Chem) {
        this.RollNo = RollNo;
        this.Name = Name;
        this.Math = Math;
        this.Phy = Phy;
        this.Chem = Chem;
    }
    Student1.prototype.Calculate = function () {
        this.Total = this.Math + this.Phy + this.Chem;
        this.Per = this.Total / 3;
    };
    Student1.prototype.Display = function () {
        console.log("Total is=" + this.Total);
        console.log("Per is " + this.Per);
    };
    return Student1;
}());
var stud = new Student1(1, "Aishu", 80, 80, 80);
stud.Calculate();
stud.Display();
