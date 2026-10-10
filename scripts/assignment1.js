// const -- things that dont change
const RestaurantName = "Salads 'R' Us";
const Cuisine = "Health Salads";
const City = "Chicago";


console.log(RestaurantName)
console.log(Cuisine)
console.log(City)

console.log( "Restuarant Report: " +  "\n" +
    "Restuarant: " + RestaurantName + "\n" +
    "Cuisine: " + Cuisine + "\n" + 
    "City:" + City + "\n"
);

let todaysSpecial = "Fruit Salad";
let availableTables = 10;
let Status = "Open";

console.log("Today's Special: " + todaysSpecial + "\n" +
    "Available Tables: " + availableTables + "\n" +
    "Open or closed: " + Status + "\n"
)

Status = "closed";
availableTables = 0;

console.log( "Final Report: " + "\n" + "Today's Special: " + todaysSpecial + "\n" +
    "Available Tables: " + availableTables + "\n" +
    "Open or closed: " + Status + "\n"
)

Status ="closed";
availableTables = 0;

console.log("Update Report:");
console.log(RestaurantName);
console.log(Cuisine);
console.log(City);
console.log(availableTables);
console.log(Status)


