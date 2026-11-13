class bird{
    fly(){
        console.log("Birds can fly");
    }
}

class Penguin extends bird{
    fly(){
        console.log("Penguin can't fly");
    }
}

const penguin = new Penguin();
penguin.fly();