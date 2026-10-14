for(let i=0;i<4;i++)(
    document.write("my for loop is working")
)

for(let i=1; i<=10; i++){
    document.write(`<p>${i}<p>`)
}

for(let i=1; i<=10; i++){
    document.write(`<p>${i}<p>`)
}

const num = 2;
for (let i = 1; i <=10; i++) {
    let res= i*num;
    document.write(`<p>${num} x ${i} = ${res}<p>`);

}

    for(let i=0; i<=20; i+=5){
        console.log(i); //0 5 10 20
    }

    // Arrays
// Without an array:
let temp1 = 30;
let temp2 = 40;
let temp3 = 25;
let temp4 = 27;
let temp5 = 28;

// ... this gets messy fast
// With an array:
//                   0  1  2  3  4
let temperatures = [30,40,25,27,28];

console.table(temperatures);

console.log(temperatures[0]);
console.log(temperatures[1]);
console.log(temperatures[2]);

//loop to travel the array

for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
}

// two parallel arrays
//// the arrays share the index to store related data

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const sales = [320, 410, 290, 505, 480, 620, 710];

function getDayLabel(salesAmount) {
    return salesAmount >= 500 ? "High" : "Low";
}

function generateReport() {
    let output = "";
    let total = 0;

    for (let i = 0; i < days.length; i++) {
        const salesAmount = sales[i];
        const label = getDayLabel(salesAmount);
        total += salesAmount;
        output += `${days[i]}: $${salesAmount} (${label})\n`;
    }

    const average = total / days.length;
    output += `Weekly total: $${total}\n`;
    output += `Weekly average: $${average.toFixed(2)}`;
    return output;
}

console.log(generateReport());
