// Learning OOP in javascript

class product{
    constructor(vat){
        this.vat = vat;
    }
    buyProduct(price, discount){
        const discountedPrice = price - (price * discount) / 100;
        const finalPrice = discountedPrice + (discountedPrice * this.vat) / 100;
        return(finalPrice);
    }
}

const shirt = new product(15);
let price = shirt.buyProduct(1000, 10);
console.log("The price of the shirt is: ", price);