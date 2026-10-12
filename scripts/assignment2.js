//Part 1 A function with parameter 

function showRestaurantName(){
    console.log(" Welcome To Salads 'R' Us")
}
//step 2: call the function
showRestaurantName()



// Part 2-- A function with one parameter

function greetCustomer(customer){
    console.log("Welcome " + customer + " Please take a table anywhere!");
};

greetCustomer("Aaron");
greetCustomer("Lakisha")
greetCustomer("Bill")


function calculateTotal(dishPrice, taxs){
    let totalPrice = dishPrice * taxs * dishPrice;
    return totalPrice;
}

let x = calculateTotal(12, 0.105)
let y = calculateTotal(14,0.105)
let z = calculateTotal(15, 0.105)

//console.log("Garden total with tax is " + x);
console.log("Spring Salad total with tax is " + z);
console.log("Fruit Salad total with tax is " + y);
console.log("Garden salad total with tax is " + x);











