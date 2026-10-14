// Final Project 103-72
const restaurantName = "Salads are Us";
const days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const sales = [320, 410, 290, 505, 480, 620, 710]

function getDayLabel(amount) {
    if(amount < 400){
        return "slow day";

    } else if(amount < 600){
        return "Good Day";
    }else{
        return "excellent Day"
    }
}



function generateReport(){
    let outPut = "";
    let total = 0;

    for(let i = 0; i < days.length ; i++){
        console.log(`${days[i]}: $ ${sales[i]} ${getDayLabel(sales[i])} `)

        total += sales[i]
    }

    const average = total / days.length

    console.log(`weekly total ${total}`)
    console.log(`weekly average ${average}`)
}

generateReport();