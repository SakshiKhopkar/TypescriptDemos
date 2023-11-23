class employee{
    id : number;
    name: string;
    salary: number;
    hra:number;
    ta:number;
    da:number;
    pf:number;
    gross : number;

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
        
    }
    calculate(){
        this.hra=this.salary*0.30;
        this.da=this.salary*0.50;
        this.ta=this.salary*0.20;
        this.pf=this.salary*0.12;
        
        this.gross = this.salary+this.hra+this.da+this.ta-this.pf;
    }
    print(){
         console.log(this.gross);
    }
}
const a = new employee(2,"Aishwarya",60000);
a.calculate();
a.print();