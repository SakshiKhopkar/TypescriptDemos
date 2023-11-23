// let message ="Hello typesciptcscript";
// console.log(message);
// var emp={id:1,name:"sakshi"};
// console.log(emp);
// class date1{
//     day : number;
//     month : string;
//     year : number;
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function (value) {
        console.log(value.a + " " + value.b);
    };
    return Test;
}());
var Idata = { a: 10, b: 20 };
var t = new Test();
t.print(Idata);
var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.name = name;
        this.rollno = rollno;
    }
    return Student;
}());
var s = new Student(1, "sakshi");
console.log(s.name + " " + s.rollno);
