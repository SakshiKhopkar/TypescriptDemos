class Product{
    Pcode : number;
    Name : number;
    Price : number;
    Discount : number;

    constructor(Pcode,Name,Price){
        this.Pcode = Pcode;
        this.Name = Name;
        this.Price = Price;
    }
    DiscountCal()
    {
       this.Discount = this.Price - (this.Price*(0.10));
    }
    Display(){
        console.log(this.Discount);
    }
}
let pro = new Product(1,"Fan",50);
pro.DiscountCal();
pro.Display();
