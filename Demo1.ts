// let message ="Hello typesciptcscript";
// console.log(message);
// var emp={id:1,name:"sakshi"};
// console.log(emp);
// class date1{
//     day : number;
//     month : string;
//     year : number;

//     constructor(day,month,year){
//         this.day=day;
//         this.month=month;
//         this.year=year;
//     }
//     print(){
//         console.log(this.day+"/"+this.month+"/"+this.year);
//     }
// }
// const d = new date1(23,"nov",2023);
// d.print();
interface Idata{
    a:number;
    b:number;
}
class Test{
    print(value:Idata){
        console.log(value.a +" "+value.b);
    }
}
const Idata ={a:10,b:20};
const t = new Test();
t.print(Idata);

interface Istudent{
    rollno:number;
    name:string;
}
class Student{
    rollno : number;
    name : string;
    constructor(rollno,name){
        this.name=name;
        this.rollno=rollno;
    }
}
const s : Istudent=new Student(1,"sakshi");
console.log(s.name+" "+s.rollno);