const Car = require("./Car.js")

class Benz extends Car{
    constructor(name,type,price){
        super(name,type);
        this.price = price;
        
    }

    infoWarranty(){
        if(this.price >= 5000000){
            console.log(`${this.type} ${this.name} has 5 years accident warranty`);
        }
        else{
            console.log(`${this.type} ${this.name} has no accident warranty`);
        }
    }
}
module.exports = Benz;










