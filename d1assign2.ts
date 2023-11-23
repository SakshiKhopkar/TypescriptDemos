class Student1
{
    RollNo:number;
    Name:string;
    Math:number;
    Phy:number;
    Chem:number;
    Total:number;
    Per:number;
    constructor(RollNo,Name,Math,Phy,Chem){
        this.RollNo=RollNo;
        this.Name = Name;
        this.Math = Math;
        this.Phy = Phy;
        this.Chem = Chem;
    }
    Calculate(){
        this.Total = this.Math+this.Phy+this.Chem;
        this.Per = this.Total/3;
    }
    Display(){
        console.log("Total is="+this.Total);
        console.log("Per is "+this.Per);
    }

}
const stud = new Student1(1,"Aishu",80,80,80);
stud.Calculate();
stud.Display();