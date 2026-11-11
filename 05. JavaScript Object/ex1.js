const cart = [
    {
        item: "Laptop",
        price: 1000,
        quantity: 1
    },
    {
        item: "Mouse",
        price: 500,
        quantity: 2
    },
    {
        item: "Keyboard",
        price: 700,
        quantity: 1
    }
]


let totalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
console.log(totalPrice);
